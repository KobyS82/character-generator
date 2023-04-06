const { Character, User } = require('../models');

const resolvers = {
  Query: {
    getCharacter: async (_, { _id }, { Character }) => {
      return await Character.findById(_id);
    },
    getCharacters: async (_, { characterName }, { Character }) => {
      return await Character.find({ characterName });
    },
    getUser: async (_, { _id }, { User }) => {
      return await User.findById(_id);
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
    createUser: async (_, args, { User }) => {
      const user = await User.create(args);
      return user;
    },
    updateUser: async (_, { _id, ...rest }, { User }) => {
      return await User.findByIdAndUpdate(_id, rest, { new: true });
    },
    deleteUser: async (_, { _id }, { User }) => {
      return await User.findByIdAndRemove(_id);
    },
    login: async (_, { userName, password }, { User }) => {
      const user = await User.findOne({ userName, password });
      if (!user) {
        throw new Error('Invalid credentials');
      }
      return user;
    },
    logout: async (_, { userName, password }, { User }) => {
      const user = await User.findOne({ userName, password });
      if (!user) {
        throw new Error('Invalid credentials');
      }
      return user;
    },
  },
};

module.exports = resolvers;