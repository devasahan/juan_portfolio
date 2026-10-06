/**
 * Zero-dependency dev server: serves the site on http://localhost:3000 and
 * reloads the browser whenever a file changes. Run it with `npm run dev`.
 *
 * In a Git clone it also pulls new commits from GitHub every 30 seconds, so
 * changes pushed to the repo show up in the browser without re-downloading.
 *
 * Options: npm run dev -- --no-open  don't open a browser tab
 *          npm run dev -- --no-sync  don't pull updates from GitHub
 */
import { exec, execFile } from "node:child_process";
import { existsSync, watch } from "node:fs";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url)).replace(/[\\/]$/, "");
const START_PORT = Number(process.env.PORT) || 3000;
const IGNORED = /(^|[\\/])(\.|node_modules)|~$/;
const SYNC_INTERVAL_MS = 30_000;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
};

// Injected into every HTML page; the browser reloads when the server says so.
const RELOAD_SNIPPET = `<script>new EventSource("/__reload").onmessage = () => location.reload();</script>`;

const clients = new Set();

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");

  if (url.pathname === "/__reload") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    res.write("retry: 1000\n\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    pathname = "/";
  }
  if (pathname.endsWith("/")) pathname += "index.html";

  const file = normalize(join(ROOT, pathname));
  if (!file.startsWith(ROOT + sep) || IGNORED.test(file.slice(ROOT.length))) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
    return;
  }

  try {
    let body = await readFile(file);
    const type = TYPES[extname(file).toLowerCase()] || "application/octet-stream";
    if (type.startsWith("text/html")) {
      body = body.toString().replace("</body>", `${RELOAD_SNIPPET}</body>`);
    }
    res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" }).end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
});

const log = (message) => console.log(`  ${new Date().toLocaleTimeString()}  ${message}`);

let reloadTimer;
function reload(changed) {
  if (!changed || IGNORED.test(changed)) return;
  clearTimeout(reloadTimer);
  reloadTimer = setTimeout(() => {
    log(`${changed} changed, reloading`);
    for (const client of clients) client.write("data: reload\n\n");
  }, 100);
}

function watchFiles() {
  try {
    watch(ROOT, { recursive: true }, (_, name) => reload(name));
  } catch {
    // Recursive watching needs Node 20+ on Linux; fall back to the site's folders.
    for (const dir of ["", "css", "js", "assets", "assets/projects"]) {
      try {
        watch(join(ROOT, dir), (_, name) => reload(name && join(dir, name)));
      } catch {
        // Folder doesn't exist; nothing to watch there.
      }
    }
  }
}

function git(...args) {
  return new Promise((resolve, reject) => {
    execFile("git", args, { cwd: ROOT }, (error, stdout, stderr) =>
      error ? reject(Object.assign(error, { stderr })) : resolve(stdout.trim()),
    );
  });
}

/**
 * Fast-forwards to the latest commit on GitHub. The file watcher then reloads
 * the browser. It never overwrites local edits: if a pull would, Git refuses
 * and we just report it.
 */
function startAutoUpdate() {
  if (process.argv.includes("--no-sync")) return;
  if (!existsSync(join(ROOT, ".git"))) {
    console.log("  Auto-update is off: this folder wasn't downloaded with `git clone`.\n");
    return;
  }

  let busy = false;
  let lastProblem = "";
  const pull = async () => {
    if (busy) return;
    busy = true;
    try {
      const before = await git("rev-parse", "HEAD");
      await git("pull", "--ff-only", "--quiet");
      if ((await git("rev-parse", "HEAD")) !== before) log("Pulled the latest changes from GitHub");
      lastProblem = "";
    } catch (error) {
      if (error.code === "ENOENT") {
        log("Auto-update is off: Git isn't installed.");
        clearInterval(timer);
        return;
      }
      const output = (error.stderr || error.message).trim();
      const edited = output.match(/^\t.+$/gm)?.map((line) => line.trim());
      const problem =
        /local changes/.test(output) && edited
          ? `you've edited ${edited.join(", ")} here and the update changes it too. Undo your edit to get the update.`
          : output.split("\n")[0];
      if (problem !== lastProblem) log(`Skipped an update from GitHub: ${problem}`);
      lastProblem = problem;
    } finally {
      busy = false;
    }
  };

  const timer = setInterval(pull, SYNC_INTERVAL_MS);
  pull();
  console.log("  Checking GitHub for updates every 30 seconds.\n");
}

function openBrowser(address) {
  if (process.argv.includes("--no-open")) return;
  const command =
    process.platform === "win32"
      ? `start "" "${address}"`
      : process.platform === "darwin"
        ? `open "${address}"`
        : `xdg-open "${address}"`;
  exec(command, () => {});
}

// Try the next port when one is taken, e.g. by another running copy.
function listen(port) {
  const onError = (error) => {
    if (error.code === "EADDRINUSE" && port < START_PORT + 10) listen(port + 1);
    else throw error;
  };
  server.once("error", onError);
  server.listen(port, "127.0.0.1", () => server.off("error", onError));
}

server.once("listening", () => {
  const address = `http://localhost:${server.address().port}`;
  console.log(`\n  Portfolio running at ${address}`);
  console.log("  Save any file and the browser reloads. Press Ctrl+C to stop.\n");
  watchFiles();
  startAutoUpdate();
  openBrowser(address);
});

listen(START_PORT);
