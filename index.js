import puppeteer from "puppeteer";

const PERMA_LINK =
  "https://revvsales-company1515.revvsales.com/perma/DOC/RvPsNGmfJN0lpZ/Untitled-Document";

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);

  await page.goto(PERMA_LINK);

  await screenshotDOMElement(".styling-coverpage-wrapper", page, 16);

  await browser.close();

  console.log("Screenshot");
})();

async function screenshotDOMElement(selector, page, padding = 0) {
  const rect = await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    const { x, y, width, height } = element.getBoundingClientRect();
    return { left: x, top: y, width, height, id: element.id };
  }, selector);

  await page.setViewport({
    width: 1550,
    height: 10000, // set whatever you want
  });

  return await page.screenshot({
    path: "element.png",
    clip: {
      x: 378,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    },
  });
}
