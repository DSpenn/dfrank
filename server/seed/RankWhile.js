/* eslint-disable no-plusplus */
/* eslint-disable padded-blocks */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
const Elo = require('arpad');
const { Fight, Character } = require('../models');
const db = require('../config/connection');
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
/* const uscf = {
    default: 32,
    2100: 24,
    2400: 16
  }; */

/*   const min_score = 100;
  const max_score = 10000; //2882 */

// const elo = new Elo(uscf, min_score, max_score);
const elo = new Elo();
elo.setMin(100); // was getting negative numbers..

// let startRank = 1000;
/* for(let i=0; i<arr.length; i++) {

} */
db.once('open', async () => {
  try { // .then(function(allFights) {
    // 1 is start
    // -1 is end
    const allFights = await Fight.find().sort({ timeOf: 1 }).hint({ timeOf: 1 }).allowDiskUse();
    // .limit(10);
    console.log(allFights.length);
    let i = 0;
    while (i < allFights.length) {
      const fight = allFights[i];
      i++;
      if (fight.winnerRank && fight.loserRank) console.log(i, ' already ranked');
      // if (fight.winnerName === fight.loserName) console.log('Names are the same', fight.winnerName, fight.loserName);
      if ((!fight.winnerRank) && (!fight.loserRank)) {
        let tempWinnerName = '';
        let tempLoserName = '';

        // console.log(fight.winnerName);
        /*  console.log(fight.winnerClan);
        console.log((fight.winnerClan !== ''));
        console.log(fight.loserName);
        console.log(fight.loserClan);
        console.log((!fight.loserClan)); */

        if (fight.winnerName !== 'missingno.') {
          tempWinnerName = fight.winnerName;
        }
        if (fight.winnerName === 'missingno.') {
          if (fight.winnerClan) {
            // console.log(fight.winnerName, fight.winnerClan);
            tempWinnerName = (`${fight.winnerName} ${fight.winnerClan}`);
            // console.log(tempWinnerName);
          }
        } else { tempWinnerName = fight.winnerName; }

        if (fight.loserName !== 'missingno.') {
          tempLoserName = fight.loserName;
        }
        if (fight.loserName === 'missingno.') {
          if (fight.loserClan) {
            // console.log(fight.loserName, fight.loserClan);
            tempLoserName = (`${fight.loserName} ${fight.loserClan}`);
            // console.log(tempLoserName);
          }
        } else { tempLoserName = fight.loserName; }

        console.log(fight.timeOf);
        // console.log(tempWinnerName);
        // console.log(tempLoserName);

        const findWinner = await Character.findOneAndUpdate(
          { name: tempWinnerName },
          {
            $addToSet: {
              fights: fight._id,
              clans: fight.winnerClan,
            },
          },
          {
            new: true,
            upsert: true,
            runValidators: true,
          },
        );
        const findLoser = await Character.findOneAndUpdate(
          { name: tempLoserName },
          {
            $addToSet: {
              fights: fight._id,
              clans: fight.loserClan,
            },
          },
          {
            new: true,
            upsert: true,
            runValidators: true,
          },
        );
        const winnerRank = findWinner.rank;
        const loserRank = findLoser.rank;
        const newWinnerRank = elo.newRatingIfWon(winnerRank, loserRank);
        const newLoserRank = elo.newRatingIfLost(loserRank, winnerRank);
        fight.winnerRank = newWinnerRank;
        fight.loserRank = newLoserRank;

        // await findWinner.updateOne(
        await Character.updateOne(
          { name: tempWinnerName },
          {
            $set: {
              rank: newWinnerRank,
            },
          },
          {
            runValidators: true,
          },
        );
        await Character.updateOne(
          { name: tempLoserName },
          {
            $set: {
              rank: newLoserRank,
            },
          },
          {
            runValidators: true,
          },
        );

        await fight.save();

      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    console.log('all done!');
    process.exit(0);
  }
});

// { "loserRank" : { "$exists" : true } }
// .hint({ name: 1 })
// console.log("temp winner name outside", tempWinnerName);
// console.log('startRank', startRank);

/*   const tempWinnerName = fight.winnerName || mergedWinnerName;
        const tempLoserName = fight.loserName || mergedLoserName; */
// console.log("tempWinner", tempWinnerName, "beat", tempLoserName);

/*   const winnerRank = findWinner.rank ? findWinner.rank : startRank;
      const loserRank = findLoser.rank ? findLoser.rank : startRank; */

// console.log("fight.winnerRank", fight.winnerRank," rank from character", winnerRank); // if there is a rank already stored on the fight its already been ranked
// console.log("fight.loserRank", fight.loserRank ,"rank from loser char", loserRank);

/* let oddsWinnerWins = elo.expectedScore(winnerRank, loserRank);
//console.log("The odds of Winner winning are about:", oddsWinnerWins);
winnerRank = elo.newRating(oddsWinnerWins, 1.0, winnerRank);
//console.log("newRating", winnerRank);

let oddsLoserLose = elo.expectedScore(loserRank, winnerRank);
//console.log("The odds of looser loosin are about:", oddsLoserLose); // ~2.9%
loserRank = elo.newRating(oddsLoserLose, 1.0, loserRank);
//console.log("Losers's new rating:", loserRank); // 2121 */
// .hint({ name: 1 })
