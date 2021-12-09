const puppeteer = require('puppeteer');
const fs = require('fs');
const { type } = require('os');
const dateFormat = require('../utils/dateFormat');
// const moment = require('moment');

/*
const blockedResources = [
  'quantserve',
  'doubleclick',
  'twitter',
  'google-analytics',
  'fontawesome',
  'facebook',
  'analytics',
  'optimizely',
  'googlesyndication',
]; */

const fslog = fs.createWriteStream('Ganksnewt.json');
const fight = {
  timeOf: '',
  winnerName: '',
  loserName: '',
  winnerClan: '',
  loserClan: '',
  killorGank: 'Gank',
  gankNumber: '',
};
// let totalGankCount = await page.$eval(".global-stat-value", el => el.textContent);        // ***** for kills
const results = [];

var allpages = 3335;
var startpage = 1;
const urls = new Array(allpages);
// console.log("all pages", urls); // all pages

for (var x = 0, y = startpage; x < urls.length; x++, y++) {
  urls[x] = `https://www.riseofagon.com/agonmetrics/pvp/global/ganks/${y}/`;
}
// console.log(urls);
(async () => {
  const browser = await puppeteer.launch();

  for (const url of urls) {
    console.time('onePage');
    const results = [];
    const page = await browser.newPage();
    // var url1 = 'https://www.riseofagon.com/agonmetrics/pvp/global/ganks/1/';
    await page.goto(url);
    console.log(url);
    await page.content();

    console.log(page.workers());
    // console.log(page.title());
    const currPage = await page.$eval('.btn-pagination-active', (el) => el.textContent);
    console.log(' currPage: ', currPage);
    const currentPageNumber = Number(currPage);

    let totalGankCount = await page.$eval('  div:nth-child(2) > div.global-stat-value', (el) => el.textContent);
    totalGankCount = parseFloat(totalGankCount.replace(',', ''));
    // console.log("totalGankCount:", totalGankCount);

    // const tPC = await page.$eval(".pagination >  span:last-child > a", el => el.textContent);
    // console.log("tPC:", tPC);
    // var totalPageCount = Number(tPC);

    // const test = await page.$eval("#global-ganks-history > caption > span", el => el.textContent);

    const trCount = await page.$$eval('tbody > tr', (t) => t.length);
    // console.log(" tr count:", trCount);
    // trCount--;
    //  console.log(typeof(trCount));

    const table = await page.$$eval('tbody > tr > td', (table) => table.map((t) => t.textContent));
    // console.log("table:", table.length);
    // table=table.reverse();

    // table row name/ clan has the span in the td
    const clans = await page.$$eval('tr > td > span', (clans) => clans.map((t) => t.textContent));
    // console.log("clans", clans);
    /*   table.forEach(element => { console.log(element); }); */ // console.log(i,table[i]); //console.log("fight.timeOf  ",fight.timeOf);     //.split(' ').slice(0, 2).join(' ');
    // console.log("i", i); //console.log('z', z);

    var fight = {
      timeOf: '',
      winnerName: '',
      loserName: '',
      winnerClan: '',
      loserClan: '',
      killorGank: 'Gank',
      gankNumber: '',
    };

    let z = 0;
    let y = 0;
    let i = 0;

    for (i = 0, z = 0; y < trCount;
      (i += 3), (z += 2), y++) {
      var fight = {
        timeOf: '',
        winnerName: '',
        loserName: '',
        winnerClan: '',
        loserClan: '',
        killorGank: 'Gank',
        gankNumber: '',
      };
      fight.timeOf = (`${dateFormat(table[i])}Z`);
      fight.winnerClan = clans[z];
      fight.loserClan = clans[z + 1];
      fight.winnerName = table[i + 1].replace(fight.winnerClan, '').trim();
      fight.loserName = table[i + 2].replace(fight.loserClan, '').trim();
      fight.killorGank = 'Gank';
      fight.gankNumber = (totalGankCount - ((currentPageNumber - 1) * 50) - y);
      results.push(fight);
    }
    console.timeEnd('onePage');
    // console.time("logwrite");
    await logWrite(results);
    // console.timeEnd("logwrite");
    await page.close();
  }
  await browser.close();
  // logWrite(results);
})();

async function logWrite(results) {
  try {
    fslog.write(JSON.stringify(results, null, 2));
  } catch {
    console.log(error);
  }
}

//  await page.screenshot({ path: 'testresult.png', fullPage: true })
// await page.waitForSelector('.page_inner');
/* const pm = await page.metrics();
console.log(pm.Documents); */

/*

   for (var wow = 1; wow < trCount; wow++) {
  console.log('wow', wow);
  for (var z = 0;  z < clans.length; z += 2) {
    console.log('z', z);
     for (var i = 0;  i < table.length; i += 3)
     console.log("i", i);
     {

//await page.waitForTimeout(5000)
({ headless: true })
  //await page.evaluate(() => (window.map = new Map())); */
