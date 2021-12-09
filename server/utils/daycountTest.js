const db = require('../config/connection');
const { Character, Fight } = require('../models');
const fs = require('fs');
const fslog = fs.createWriteStream('DayTest.json');

async function logWrite(res) {
  try {
    fslog.write(JSON.stringify(res, null, 1));
  } catch {
    console.log(e);
  }
}

db.once('open', async () => {
  const res = await Fight.aggregate([{
      '$match': {
        'timeOf': {
          '$gte': new Date('Mon, 01 May 2017 00:00:00 GMT'),
          '$lt': new Date('Sun, 12 Dec 2021 00:00:00 GMT')
        }
      }
    }, {
      '$group': {
        '_id': {
          '$dateToString': {
            'format': '%Y-%m-%d',
            'date': '$timeOf'
          }
        },
        'count': {
          '$sum': 1
        }
      }
    }, {
      '$sort': {
        'count': -1
      }
    }



  ])
  await logWrite(res);
  console.log("done");
  process.exit(1);
});
// 'count': -1