// const FileOne = require('./killsnotUnique.json');
const fs = require('fs');
const { exit } = require('process');

const fslog = fs.createWriteStream('./test.json');
const fightGankSeeds1 = require('./kills2017.json');
const fightGankSeeds2 = require('./Kills2018.json');
const fightGankSeeds3 = require('./Kills2019on.json');
const fightGankSeeds4 = require('./Ganks.json');

async function logWrite(uniqueData) {
  try {
    fslog.write(JSON.stringify(uniqueData, null, 2));
  } catch {
    console.log(e);
  }
  console.log('done');
}

async function main() {
  const nArr = [];
  const cArr = [];
  const a = [fightGankSeeds4, fightGankSeeds3, fightGankSeeds2, fightGankSeeds1];
  a.forEach((element) => {
    const ParsedF = JSON.parse(JSON.stringify(element));
    cArr.push(ParsedF.length);
    ParsedF.forEach((e) => {
      if (e.winnerName === 'MissingNo.') {
        if (e.winnerClan) {
          // console.log(fight.winnerName, fight.winnerClan);
          nArr.push((`${e.winnerName} ${e.winnerClan}`));
          // console.log(tempWinnerName);
        }
      } else { nArr.push(e.winnerName); }
    });
  });
console.log(cArr);
  const uniqueData = [...new Set(nArr)];
  console.log(uniqueData);
  logWrite(uniqueData);
}

main();