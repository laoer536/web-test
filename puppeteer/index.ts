import puppeteer, { PuppeteerLaunchOptions } from 'puppeteer-core'
import { getEdgePath } from 'edge-paths'
export async function getBrowser(options: Omit<PuppeteerLaunchOptions, 'executablePath'> = {}) {
  return await puppeteer.launch({
    executablePath: getEdgePath(),
    ...options,
  })
}
