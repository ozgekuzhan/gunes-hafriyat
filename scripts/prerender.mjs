// Post-build static prerender: renders the built SPA once with a headless
// browser and bakes the resulting markup into dist/index.html so search
// engine crawlers (and users) get real content on first load, before
// React re-renders and takes over on the client.
//
// Best-effort: if no Chromium executable is available (e.g. a deploy host
// that hasn't run `npx playwright install chromium`), this step is skipped
// with a warning instead of failing the whole build.
import { createServer } from 'node:http'
import { existsSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')
const port = 4173

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
}

function resolveChromiumPath() {
  if (process.env.PLAYWRIGHT_CHROMIUM_PATH) return process.env.PLAYWRIGHT_CHROMIUM_PATH
  const wellKnown = '/opt/pw-browsers/chromium'
  return existsSync(wellKnown) ? wellKnown : undefined
}

async function launchChromium() {
  const executablePath = resolveChromiumPath()
  try {
    return await chromium.launch(executablePath ? { executablePath } : {})
  } catch (error) {
    console.warn(
      `[prerender] Skipping static prerender: no usable Chromium found (${error.message}). ` +
        'Run `npx playwright install chromium` to enable it.',
    )
    return null
  }
}

const server = createServer(async (req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url.split('?')[0]
  const filePath = path.join(distDir, decodeURIComponent(urlPath))
  try {
    const data = await readFile(filePath)
    const ext = path.extname(filePath)
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] ?? 'application/octet-stream' })
    res.end(data)
  } catch {
    res.writeHead(404)
    res.end('Not found')
  }
})

await new Promise((resolve) => server.listen(port, resolve))

const browser = await launchChromium()
if (!browser) {
  server.close()
  process.exit(0)
}

try {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle' })
  await page.waitForSelector('main')
  const renderedRoot = await page.$eval('#root', (el) => el.innerHTML)

  const indexPath = path.join(distDir, 'index.html')
  const html = await readFile(indexPath, 'utf-8')
  const updated = html.replace('<div id="root"></div>', `<div id="root">${renderedRoot}</div>`)
  await writeFile(indexPath, updated, 'utf-8')
  console.log('[prerender] Prerendered content baked into dist/index.html')
} finally {
  await browser.close()
  server.close()
}
