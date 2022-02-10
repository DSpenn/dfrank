/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-await */
const { Fight, Character, User } = require('../models');

const resolvers = {
  Query: {
    characters: async (root, { _id, name }) => {
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
    },
    character: async (root, args) => {
      console.log('args', args);
      console.log('name', args.name);
      console.log('id', args._id);
      console.log(/\d/.test(args._id));

      if (/\d/.test(args._id)) {
        return await Character.findById(args).populate({path: 'fights', options: { sort: { 'timeOf': -1 } } });
      }
      else {
        let name = {name: args._id};
        console.log('name2', name)

/*         const explain = Character.findOne(name).populate({path: 'fights', options: { sort: { 'timeOf': -1 } } }).explain();
        console.log(explain); */
       return await Character.findOne(name).populate({path: 'fights', options: { sort: { 'timeOf': -1 } } });
      }

    },

    fights: async (root) => {
//      const params = {};
      /*       if (!params.winnerName && !params.loserName) {
        return await Fight.find({ timeOf: { $gte: '2021-10-1' } }).sort({ timeOf: -1 }).lean();
        //  return await Fight.find().sort({ timeOf: -1 }).limit(10000).lean();       .limit(10000)
      } */
/*       if (winnerName && loserName) {
        params.winnerName = {
          $regex: winnerName,
        };
        params.loserName = {
          $regex: loserName,
        };
        return await Fight.find(params).sort({ 'timeOf': -1 });
      }

      if (winnerName) {
        params.winnerName = winnerName;
        return await Fight.find(params).sort({ 'timeOf': -1 }).lean();
      }

      if (loserName) {
        params.loserName = loserName;
        return await Fight.find(params).sort({ 'timeOf': -1 });
      }
       */
      //return Fight.find({ timeOf: { $gte: '2021-10-1' } }).hint({timeOf: -1}).sort({timeOf: -1}).lean();
      return await Fight.find().hint({timeOf: -1}).select({ _id: 1, timeOf: 1, winnerName: 1, loserName: 1, winnerClan: 1, loserClan: 1, killorGank: 1, winnerRank: 1, loserRank: 1 }).lean().limit(50000);
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
