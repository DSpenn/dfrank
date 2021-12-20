const db = require('../../config/connection');
const { Character, Fight } = require('../../models');
const fs = require('fs');
const fslog = fs.createWriteStream('test.json');

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
        'winnerName': 'kered calith'
      }
    },
     {
      '$group': {
        '_id': "$loserName",
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
  console.log(res);
  await logWrite(res);
  console.log("done");
  process.exit(1);
});
// 'count': -1




/* const res = await Fight.aggregate([{
  '$match': {
    'winnerName': 'kered calith'
  }
},
 {
  '$group': {
    '_id': "$loserName",

    'count': {
      '$sum': 1
    }
  }
}, {
  '$sort': {
    'count': -1
  }
}
]) */