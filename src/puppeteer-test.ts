import { getBrowser } from '../puppeteer'
;(async () => {
  const browser = await getBrowser()
  const page = await browser.newPage()
  await page.goto('https://www.microsoft.com/edge/download/insider')
  await page.screenshot({ path: 'example.png' })
  await browser.close()
})()
