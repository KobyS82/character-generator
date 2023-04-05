
    },
  },

  Mutation: {

    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      return Thought.create({ thoughtText, thoughtAuthor });
    },
    addComment: async (parent, { thoughtId, commentText }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText } },
=======
    addProfile: async (parent, { name }) => {
      return Profile.create({ name });
    },
    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },

        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },

        { new: true }
      );
    },
  },
};

module.exports = resolvers;
