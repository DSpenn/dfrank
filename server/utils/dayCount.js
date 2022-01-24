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
            //'format': '%H',
            'date': '$timeOf'
          }
        },
        'fights': {
          '$sum': 1
        },
        'winners': {'$addToSet': '$winnerName'},
        'loosers': {'$addToSet': '$loserName'},
      },
    },
    {
      
      '$project':{
        'uNames':{'$setUnion':['$winners','$loosers']},
        'fights': 1
    }
  },
  {
    '$project':{
      'numberOfUNames': {
      '$size': '$uNames'},
      'fights': 1,
  }
},
    {
      '$sort': {
        '_id': 1
      }
    }



  ])
  await logWrite(res);
  console.log('done');
  process.exit(1);
});
// 'count': -1
//         'numberOfUNames': { '$cond': { 'if': { '$isArray': '$uNames' }, 'then': { '$size': '$uNames' }, 'else': 'NA'} },