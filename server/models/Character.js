const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const characterSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    rank: {
      type: Number,
      default: 1400,
      index: true,
    },
    clans: [
      {
        type: String,
        lowercase: true,
      },
    ],
    fights: [
      {
        type: [Schema.Types.ObjectId],
        ref: 'Fight',
      },
    ],
    race: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

characterSchema.virtual('winCount', {
  ref: 'Fight',
  localField: 'name',
  foreignField: 'winnerName',
  count: true,
});

characterSchema.virtual('loseCount', {
  ref: 'Fight',
  localField: 'name',
  foreignField: 'loserName',
  count: true,
});

characterSchema.virtual('Wins', {
  ref: 'Fight',
  localField: 'name',
  foreignField: 'winnerName',
});

characterSchema.virtual('Losses', {
  ref: 'Fight',
  localField: 'name',
  foreignField: 'loserName',
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
