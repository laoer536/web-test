import puppeteer from 'puppeteer-core'
import { getEdgePath } from 'edge-paths'
const EDGE_PATH = getEdgePath()
;(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
  })
  const page = await browser.newPage()
  await page.goto('https://www.microsoft.com/edge/download/insider')
  await page.screenshot({ path: 'example.png' })
  await browser.close()
})()
