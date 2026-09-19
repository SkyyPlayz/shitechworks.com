/**
 * Recapture Story Writer theme-showcase PNGs from public/preview/mockup.html.
 * Uses the mock's own boot query params (reset, view, colorSet, tour=off).
 *
 *   node scripts/capture-theme-showcase.mjs
 */
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync, copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");
const WIDTH = 2752;
const HEIGHT = 1152;

const THEMES = [
  { slug: "neon-classic", colorSet: "classic" },
  { slug: "aurora", colorSet: "aurora" },
  { slug: "cyberpunk", colorSet: "cyber" },
  { slug: "sunset-coast", colorSet: "sunset" },
  { slug: "ice-mono", colorSet: "ice" },
  { slug: "emberfall", colorSet: "ember" },
  { slug: "verdant-reach", colorSet: "verdant" },
  { slug: "royal-arcana", colorSet: "royal" },
  { slug: "noir-rose", colorSet: "noir" },
  { slug: "winterlight", colorSet: "winter" },
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".json": "application/json",
};

function startStaticServer(root) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url || "/", "http://127.0.0.1");
      let rel = decodeURIComponent(url.pathname);
      if (rel.endsWith("/")) rel += "index.html";
      const file = join(root, rel);
      if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) {
        res.writeHead(404);
        res.end("not found");
        return;
      }
      res.writeHead(200, { "content-type": MIME[extname(file)] || "application/octet-stream" });
      createReadStream(file).pipe(res);
    });
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

async function waitForApp(page) {
  await page.waitForFunction(() => {
    const root = document.getElementById("dc-root");
    if (!root) return false;
    const text = root.textContent || "";
    return text.includes("Mythos Writer") && text.includes("Fractures");
  }, { timeout: 30000 });
  await page.waitForFunction(() => document.fonts.status === "loaded", { timeout: 15000 }).catch(() => {});
  await page.evaluate(async () => {
    const imgs = [...document.images];
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            }),
      ),
    );
  });
  await page.waitForTimeout(700);
}

async function main() {
  const { server, port } = await startStaticServer(PUBLIC);
  const browser = await chromium.launch({
    args: ["--hide-scrollbars", "--disable-gpu-vsync"],
  });
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
    colorScheme: "dark",
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  const outPublic = join(PUBLIC, "screenshots", "theme-showcase");
  const outDesign = join(ROOT, "design-source", "screenshots", "theme-showcase");
  mkdirSync(outPublic, { recursive: true });
  mkdirSync(outDesign, { recursive: true });

  try {
    for (const theme of THEMES) {
      const url =
        `http://127.0.0.1:${port}/preview/mockup.html` +
        `?reset&tour=off&view=editor&storySub=editor&zoom=scene` +
        `&colorSet=${encodeURIComponent(theme.colorSet)}`;
      console.log(`capturing ${theme.slug} ← ${theme.colorSet}`);
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await waitForApp(page);

      const raw = await page.screenshot({
        type: "png",
        fullPage: false,
        animations: "disabled",
      });
      const png = await sharp(raw)
        .resize(WIDTH, HEIGHT, { fit: "fill" })
        .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
        .toBuffer();
      const dest = join(outPublic, `${theme.slug}.png`);
      writeFileSync(dest, png);
      copyFileSync(dest, join(outDesign, `${theme.slug}.png`));
      const meta = await sharp(png).metadata();
      console.log(`  ${theme.slug}.png ${meta.width}×${meta.height} ${png.length} bytes`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
