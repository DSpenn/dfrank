const db = require('../config/connection');
const { Character, Fight } = require('../models');

db.once('open', async () => {
  const res = await Fight.aggregate([{
    $unset: ['winnerRank', 'loserRank'],
  }]);
  console.log(res);

  const ress = await Character.aggregate([{
    $unset: ['Rank'],
  }]);

  console.log(ress);
});
