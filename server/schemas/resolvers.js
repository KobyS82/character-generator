const { Character } = require('../models');

const resolvers = {
  Query: {
    getCharacter: async (_, { _id }, { Character }) => {
      return await Character.findById(_id);
    },
    getCharacters: async (_, { characterName }, { Character }) => {
      return await Character.find({ characterName });
    },
  },
  Mutation: {
    createCharacter: async (_, args, { Character }) => {
      const char = await Character.create(args);
      return char;
    },
    updateCharacter: async (_, { _id, ...rest }, { Character }) => {
      return await Character.findByIdAndUpdate(_id, rest, { new: true });
    },
    deleteCharacter: async (_, { _id }, { Character }) => {
      return await Character.findByIdAndRemove(_id);
    },
  },
};

module.exports = resolvers;
