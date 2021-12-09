/* eslint-disable no-console */
const puppeteer = require('puppeteer');
const fs = require('fs');
const dateFormat = require('../utils/dateFormat');
const fslog = fs.createWriteStream('Killsnew.json');

  var allpages = 18318;
  var startpage = 1; //11953
/*   const urls = new Array(allpages);

  for (var x = 0, y = startpage; x < urls.length; x++, y++) {
    urls[x] = (`https://www.riseofagon.com/agonmetrics/pvp/global/kills/${y}/`);
  }
 */

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //for (const url of urls) {
  for (var xx = 0, yy = startpage; xx < (allpages-startpage); xx++, yy++) {
    console.time("onePage");
    let url = (`https://www.riseofagon.com/agonmetrics/pvp/global/kills/${yy}/`);
    let results = [];
    await page.goto(url);
    console.log(url);
    await page.waitForSelector('tbody');
    //await page.content();
    //let totalGankCount = await page.$eval("  div:nth-child(1) > div.global-stat-value", el => el.textContent);
    //.global-stat-value
    let totalKillCount = await page.$eval(" div:nth-child(1) > div.global-stat-value", el => el.textContent); 
    totalKillCount = parseFloat(totalKillCount.replace(',',''));
    //console.log("totalKillCount:", totalKillCount);

    //const tPC = await page.$eval(".pagination >  span:last-child > a", el => el.textContent);
    //console.log("tPC:", tPC);
    //var totalPageCount = Number(tPC);

    let trCount = await page.$$eval('tbody > tr', (t) => t.length);
    //console.log(" tr count:", trCount);
    //trCount--;
    //  console.log(typeof(trCount));
    let table = await page.$$eval('tbody > tr > td', (table) => table.map((t) => t.textContent));
    //console.log("table:", table.length);
    //table=table.reverse();


    //table row name/ clan has the span in the td
    let clans = await page.$$eval('tr > td > span', (clans) => clans.map((t) => t.textContent));
    //console.log("clans", clans);

    /*   table.forEach(element => { console.log(element); }); */      //console.log(i,table[i]); //console.log("fight.timeOf  ",fight.timeOf);     //.split(' ').slice(0, 2).join(' ');

    //console.log("i", i); //console.log('z', z);
    let currPage = await page.$eval(".btn-pagination-active", el => el.textContent);
    console.log(currPage);
    var currentPageNumber = Number(currPage);

    var z = 0; var y = 0; var i = 0;
    for (i = 0, z = 0; y < trCount; (i += 3), (z += 2), y++) {
      var fight = { timeOf: '', winnerName: '', loserName: '', winnerClan: '', loserClan: '', killorGank: 'Kill', killNumber: '' };
      fight.timeOf = (dateFormat(table[i]) + 'Z');
      fight.winnerClan = clans[z];
      fight.loserClan = clans[z + 1];
      fight.winnerName = table[i + 1].replace(fight.winnerClan, '').trim();
      fight.loserName = table[i + 2].replace(fight.loserClan, '').trim();
      fight.killorGank = 'Kill';
      fight.killNumber = (totalKillCount - ((currentPageNumber - 1) * 50) - y);
      results.push(fight);
    }
    await logWrite(results);
    console.timeEnd('onePage');
  }
  await browser.close();
  //logWrite(results);
})();

async function logWrite(results) {

  try {
    fslog.write(JSON.stringify(results, null, 2));
  } catch {
    console.log(error);
  }
}