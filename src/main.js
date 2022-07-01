const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path")

const createPDF = async  () => {
  const browser = await puppeteer.launch({ headless:true });

  const page = await browser.newPage();


  const html = fs.readFileSync(path.join(`${__dirname}/../assets/input.html`), 'utf-8');

  await page.setContent(html, {waitUntil:"domcontentloaded"});

  const pdfBuffer = await page.pdf({ format:"A4" });

  await page.pdf({ format:"A4", path:path.join(`${__dirname}/../assets/output.pdf`)});
  await browser.close();
}

createPDF();
