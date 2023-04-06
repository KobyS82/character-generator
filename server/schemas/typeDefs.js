const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Character {
    _id: ID!
    characterName: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    lastUpdated: Date
  }

  type User {
    _id: ID!
    userName: String
    password: String
  }

  type Query {
    getCharacter(_id: ID!): Character
    getCharacters(characterName: String): [Character]
  }

  type Mutation {
    createCharacter(characterName: String!, strength: Int!, dexterity: Int!, constitution: Int!, intelligence: Int!, wisdom: Int!, charisma: Int!): Character
    updateCharacter(_id: ID!, characterName: String, strength: Int, dexterity: Int, constitution: Int, intelligence: Int, wisdom: Int, charisma: Int): Character
    deleteCharacter(_id: ID!): Character
  }
`;

module.exports = typeDefs;
