const db = require('../config/connection');
const { Character, Fight } = require('../models');
const fs = require('fs');
const fslog = fs.createWriteStream('KDRatio.json');

async function logWrite(res) {
  try {
    fslog.write(JSON.stringify(res, null, 1));
  } catch {
    console.log(e);
  }
}

db.once('open', async () => {
  const res = await Fight.aggregate([
    { 
      $project: { 
          scores: [
              { name: '$winnerName', wins: { $literal: 1 }, losses: { $literal: 0 } }, 
              { name: '$loserName', wins: { $literal: 0 }, losses: { $literal: 1 } },
          ] 
      } 
  }, 
  { 
      $unwind: '$scores' 
  }, 
  { 
      $group: {
           _id: "$scores.name", 
          wins: { $sum: "$scores.wins" }, 
          losses: { $sum: "$scores.losses" },
          total: { $sum: { $add: [ "$scores.wins", "$scores.losses" ] } }
          
      }
       
  },
  {
    $sort: {
      total: -1
    }
  }
  ])
  console.log(res);
  await logWrite(res);
  console.log("done");
  process.exit(1);
});