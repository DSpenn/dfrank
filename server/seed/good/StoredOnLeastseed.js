/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const db = require('../../config/connection');
const {
  Character,
  Fight,
} = require('../../models');
// const dateFormat = require('../utils/dateFormat');
// const charSeeds = require('./charseeds.json');
// const fightGankSeeds1 = require('./kills2017.json');
// const fightGankSeeds2 = require('./Kills2018.json');
// const fightGankSeeds3 = require('./Kills2019on.json');
// const fightGankSeeds4 = require('./Ganks.json');

const fighSeedsNew = require('./Ganksnewt.json');

// const fightGankSeeds = require('./kills2017.json');


//console.log(charSeeds.length);
const ParsedF = JSON.parse(JSON.stringify(fighSeedsNew));

// formatedDate = await dateFormat(newFight.timeOf) + 'Z';
// newFight.timeOf = formatedDate;
// await newFight.save();

db.once('open', async () => {
  try {
    console.log('connected');

    //await Character.insertMany(charSeeds), { ordered: false };


    const fights = await Fight.insertMany(ParsedF);
    // const fights = await Fight.find().sort({ timeOf: -1 }).allowDiskUse();
    // const fights = await Fight.insertMany(ParsedF);
    // const characters = await Character.find();

    /*     const cursor = Fight.find({ winnername: /host/ }).cursor();

    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
      console.log(doc); // Prints documents one at a time
    } */

    /*    for (newFight of fights) {
      let tempWinner = newFight.winnerName;
      let tempLoser = newFight.loserName;
      if (newFight.winnerName === 'missingno.') {
        if (newFight.winnerClan) {
          // console.log(fight.winnerName, fight.winnerClan);
          tempWinner = (`${newFight.winnerName} ${newFight.winnerClan}`);
          // console.log(tempWinnerName);
        }
      } else { tempWinner = newFight.winnerName; }

      if (newFight.loserName === 'missingno.') {
        if (newFight.loserClan) {
          // console.log(fight.loserName, fight.loserClan);
          tempLoser = (`${newFight.loserName} ${newFight.loserClan}`);
          // console.log(tempLoserName);
        }
      } else { tempLoser = newFight.loserName; }
      // console.log(tempLoser, newFight.loserName);
      console.log('timeOf', newFight.timeOf);

      // console.log("tempWinner", tempWinner);
      const pOne = await Character.findOneAndUpdate({
        name: tempWinner,
      }, {
        $addToSet: {
          fights: newFight._id,
          clans: newFight.winnerClan,
        },
      }, {
        // new: true, // new: bool - if true, return the modified document rather than the original. defaults to false (changed in 4.0)
        upsert: true, // [options.upsert=false] «Boolean» if true, and no documents found, insert a new document
      });
      // console.log("tempLoser", tempLoser);

      const pTwo = await Character.findOneAndUpdate({
        name: tempLoser,
      }, {
        $addToSet: {
          fights: newFight._id,
          clans: newFight.loserClan,
        },
      }, {
        // new: true,
        upsert: true,
      });
    } */
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});

/* newFight.winner = pOne._id;
newFight.loser = pTwo._id;
await newFight.save(); */
