const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const fightSchema = new Schema(
  {
    timeOf: {
      type: Date,
      required: true,
      min: '2017-04-17',
    },
    winnerName: {
      type: String,
      required: true,
      lowercase: true,
    },
    loserName: {
      type: String,
      required: true,
      lowercase: true,
    },
    winnerClan: {
      type: String,
      lowercase: true,
    },
    loserClan: {
      type: String,
      lowercase: true,
    },
    killorGank: {
      type: String,
      required: true,
    },
    winnerRank: {
      type: Number,
    },
    loserRank: {
      type: Number,
    },
    killNumber: {
      type: Number,
    },
    gankNumber: {
      type: Number,
    },
  },
);

fightSchema.index({ timeOf: -1 });
fightSchema.index({ winnerName: 1, loserName: 1 });
/* fightSchema.index({ killNumber: -1 } , { sparse: true, unique: true });
fightSchema.index({ gankNumber: -1 } , { sparse: true, unique: true }); */

const Fight = mongoose.model('Fight', fightSchema);

module.exports = Fight;

