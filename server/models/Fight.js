const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const fightSchema = new Schema(
  {
    timeOf: {
      type: Date,
      required: true,
      index: true,
      min: '2017-04-17',
    },
    winnerName: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },
    loserName: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
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
  {
    toJSON: {
      virtuals: true,
    },
    toObject: { virtuals: true },
  },
);

fightSchema.index({ timeOf: -1 });
fightSchema.index({ killNumber: -1 } , { sparse: true, unique: true });
fightSchema.index({ gankNumber: -1 } , { sparse: true, unique: true });

const Fight = mongoose.model('Fight', fightSchema);

module.exports = Fight;

