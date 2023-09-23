const puppeteer = require('puppeteer');

async function captureFunctions(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const functions = await page.evaluate(() => {
    const allFunctions = [];

    function extractFunctionsFromObject(obj) {
      for (const key in obj) {
        if (typeof obj[key] === 'function') {
          allFunctions.push(key);
        }
        if (typeof obj[key] === 'object') {
          extractFunctionsFromObject(obj[key]);
        }
      }
    }

    extractFunctionsFromObject(window);

    return allFunctions;
  });

  console.log('List of functions:', functions);

  await browser.close();
}

const targetUrl = 'https://login.i-ready.com/student/dashboard/home'; // Replace with the URL of the website
captureFunctions(targetUrl)
  .catch(error => {
    console.error('Error:', error);
  });
