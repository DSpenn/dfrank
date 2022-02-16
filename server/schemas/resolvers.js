const { Fight, Character, User } = require('../models');

const resolvers = {
  Query: {
    characters: async (parent, { _id, name }) => {
      const params = {};
      if (_id) {
        params._id = _id;
        return await Character.findById(params).sort({ 'rank': -1 }).lean();
      }
      if (name) {
        params.name = name;
        return await Character.find(params).sort({ 'rank': -1 }).lean();
      }
      return await Character.find().sort({ rank: -1 }).select('-fights');
      //.populate('loseCount').populate('winCount');
    },
    character: async (parent, args) => {
      console.log('args', args);

      if (/\d/.test(args._id)) {
        return await Character.findById(args).populate({path: 'fights', options: { sort: { 'timeOf': -1 } } });
      }
      else {
        let name = {name: args._id};
        console.log('name2', name)
       return await Character.findOne(name).populate({path: 'fights', options: { sort: { 'timeOf': -1 } } });
      }

    },

    fights: async () => {
      return await Fight.find().hint({timeOf: -1}).select({ timeOf: 1, winnerName: 1, loserName: 1, winnerClan: 1, loserClan: 1, killorGank: 1, winnerRank: 1, loserRank: 1, killNumber: 1 }).lean().limit(500000).exec();
      //select({ timeOf: 1, winnerName: 1, loserName: 1, winnerClan: 1, loserClan: 1, killorGank: 1, winnerRank: 1, loserRank: 1 })
    },
    fight: async (parent, args) => await Fight.find(args),
  },
  Mutation: {
    addCharacter: async ({ name, clans }) => {
      const character = await Character.create({ name, clans });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $addToSet: { chars: character },
        },
      );

      return character;
    },
    addFight: async (parent, {
      timeOf, winnerName, winnerClan, loserName, loserClan, killOrGank,
    }) => {
      const fight = await Fight.create({
        timeOf, winnerName, winnerClan, loserName, loserClan, killOrGank,
      });
      await Character.findOneAndUpdate(
        { name: winnerName },
        {
          $addToSet: {
            fights: { fights: fight._id },
            clan: fight.loserClan,
          },
        },
      );
      await Character.findOneAndUpdate(
        { name: winnerName },
        {
          $addToSet: {
            fights: { fights: fight._id },
            clan: fight.loserClan,
          },
        },
      );

      return fight;
    },
  },
};

module.exports = resolvers;
