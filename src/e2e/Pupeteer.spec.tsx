import puppeteer from 'puppeteer';

const autoScroll = async (page: puppeteer.Page) => {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const { scrollHeight } = document.body;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
};

describe('App', () => {
  jest.setTimeout(30000);
  it('should render', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#root > main > div.App_welcomeText__1geeg > p');
    const textElem = page.$('p');
    const textValue = await page.evaluate((el) => el.textContent, await textElem);
    expect(textValue).toBe('WELCOME! Please, select \'Get some fun\' or you can read about site in \'About\'');
    browser.close();
  });

  it('should show jokes page', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#root > main > div.App_navLinkContainer__3DM5c > a:nth-child(2)');
    await page.click('#root > main > div.App_navLinkContainer__3DM5c > a:nth-child(2)');
    const textElem = page.$('p');
    const textValue = await page.evaluate((el) => el.textContent, await textElem);
    expect(textValue).toBe('Select view');
    browser.close();
  });

  it('should show a cards', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#root > main > div.App_navLinkContainer__3DM5c > a:nth-child(2)');
    await page.click('#root > main > div.App_navLinkContainer__3DM5c > a:nth-child(2)');
    await page.waitForSelector('#root > main > div.ViewNavigation_viewNavContainer__3aDgN > a:nth-child(1)');
    await page.click('#root > main > div.ViewNavigation_viewNavContainer__3aDgN > a:nth-child(1)');
    await page.waitForSelector('#root > main > div.PostList_postList__30Gse > div:nth-child(1) > div > button');
    const buttonElem = await page.$('#root > main > div.PostList_postList__30Gse > div:nth-child(1) > div > button');
    const buttonValue = await page.evaluate((el) => el.textContent, buttonElem);
    expect(buttonValue).toBe('Show more');
    browser.close();
  });

  it('should show a table', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#root > main > div.App_navLinkContainer__3DM5c > a:nth-child(2)');
    await page.click('#root > main > div.App_navLinkContainer__3DM5c > a:nth-child(2)');
    await page.waitForSelector('#root > main > div.ViewNavigation_viewNavContainer__3aDgN > a:nth-child(1)');
    await page.click('#root > main > div.ViewNavigation_viewNavContainer__3aDgN > a:nth-child(2)');
    await page.waitForSelector('#root > main > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > button');
    const buttonElem = await page.$('#root > main > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > button');
    const buttonValue = await page.evaluate((el) => el.textContent, buttonElem);
    expect(buttonValue).toBe('Show more');
    browser.close();
  });

  it('should hide view navigation on phones', async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices['iPhone 6']);
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#root > main > div.App_navLinkContainer__3DM5c > a:nth-child(2)');
    await page.click('#root > main > div.App_navLinkContainer__3DM5c > a:nth-child(2)');
    await page.waitForSelector('#root > main > div.ViewNavigation_viewNavContainer__3aDgN > a:nth-child(1)');
    await page.click('#root > main > div.ViewNavigation_viewNavContainer__3aDgN > a:nth-child(2)');
    await page.waitForSelector('#root > main > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > button');
    await autoScroll(page);

    const viewNavElem = await page.$('#root > main > div.ViewNavigation_viewNavContainer__3aDgN');
    const viewNavClasses = await page.evaluate((el) => el.classList, viewNavElem);
    expect(await viewNavClasses[1].includes('hidden')).toBe(true);
    browser.close();
  });
});
