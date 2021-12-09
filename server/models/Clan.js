const mongoose = require('mongoose');
const { Schema, Model } = require('mongoose');

const clanSchema = new Schema({
  name:
  {
    type: String,
    unique: true,
    lowercase: true,
  },
  sieges: [
    {
      timeStart: {
        type: Date,
      },
      timeEnd: {
        type: Date,
      },
    },
  ],

});
const Clan = mongoose.model('Clan', clanSchema);

module.exports = Clan;

/* clanSchema.virtual('SiegeCount').get(function () {
  return this.sieges.length;
}); */

/*
currentMembers: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Character'
  },
] */
