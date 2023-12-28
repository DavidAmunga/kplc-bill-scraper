const puppeteer = require("puppeteer-extra");
// const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
// // Add adblocker plugin to block all ads and trackers (saves bandwidth)
// puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
const request_client = require("request-promise-native");

const url = "https://selfservice.kplc.co.ke/";

async function startScraping(accountNo) {
  const browser = await puppeteer.launch({ headless: false, slowMo: 100 });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "load",
    timeout: 0,
  });

  await page.setDefaultTimeout(10000);
  await page.setDefaultNavigationTimeout(20000);
  await page.waitForSelector("#ext-element-1");

  const $sidePanel = await page.$("#container-1077-innerCt");
  let $sidePanelLinks = await $sidePanel.$$(":scope > *");

  const billElementLink = $sidePanelLinks[0];

  await billElementLink.click();
  // await page.click('#button-1078');
  await page.waitForSelector("#textfield-1100-inputWrap");
  await page.waitForSelector("#textfield-1100-inputWrap");

  // Radio Item Account No radio-1097
  // Radio Item Meter No radio-1098
  await page.click("#radio-1098");

  // Type Account No
  await page.type("#textfield-1100-inputEl", accountNo);

  await page.click("#button-1102");

  const data = await responseData(page, url);
  console.log(data);
  return data;
}

const responseData = (page, url) => {
  return new Promise((resolve) => {
    page.on("response", async (response) => {
      if (
        response.url().includes("https://selfservice.kplc.co.ke/api/publicData")
      ) {
        const json = await response.json();
        resolve(json);
      }
    });
  });
};

// INSERT METER NO Here
startScraping("YOUR_METER_NO");
