/* eslint-disable arrow-parens */
/* eslint-disable no-console */
const fs = require('fs');
const db = require('../config/connection');
const { Character, Fight } = require('../models');

const fslog = fs.createWriteStream('test.json');

async function logWrite(res) {
  try {
    fslog.write(JSON.stringify(res, null, 1));
  } catch {
    console.log(e);
  }
}

db.once('open', async () => {

  

  // { $size: <expression> }

  /* console.time("time");
  const res = await Character.find().populate('winCount');
console.timeEnd("time"); */

  //  { $size: <expression> }

  // const res = await Character.find().populate('winCount').populate('loseCount');
  //  const res = await Character.find({ field: { $fights: 1 } });
  // const res = await Character.findOne().populate('Wins').populate('Losses');
  //console.log(res);

  await logWrite(results);
  console.log('done');
  process.exit(1);
});

/*
$project: {
  name: 1,
  battles: { $size: "$battles" },
}
}
])
 */

/* const res = await Character.aggregate([{
  $project: {
    name: 1,
    battles: { $cond: { if: { $isArray: "$battles" }, then: { $size: "$battles" }, else: "NA"}
  }
}
}
])

    const res = await Character.aggregate([{
      $project: {
        name: 1,
        battles: { $cond: { if: { $isArray: "$battles" }, then: { $size: "$battles" }, else: "NA"}
      }
    }
  }
  ])

*/
