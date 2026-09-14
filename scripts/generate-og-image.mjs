// One-off helper to render scripts/og-card.html into public/og-image.jpg
// (1200x630 Open Graph / Twitter card image). Re-run manually whenever the
// card design changes: node scripts/generate-og-image.mjs
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cardPath = path.join(__dirname, 'og-card.html')
const outPath = path.join(__dirname, '..', 'public', 'og-image.jpg')

const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH ?? '/opt/pw-browsers/chromium',
})
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(`file://${cardPath}`)
await page.screenshot({ path: outPath, type: 'jpeg', quality: 90 })
await browser.close()
console.log(`Wrote ${outPath}`)
