const puppeteer = require("puppeteer");
const url = "https://www.vocaltraining.com.mx/111-fernanda-alvarez";

const buttonVote = "#nc-vote-button-111";
const hour = 1000 * 60 * 61;

const myFunc = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // click button
  await page.click(buttonVote);
  await page.screenshot({ path: "example.png" });
  await page.evaluate((e) => {
    //do something on the page
  });
  // close browser
  await browser.close();
};

myFunc();

setInterval(myFunc, hour);
