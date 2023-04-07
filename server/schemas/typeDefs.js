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
  }

  type User {
    _id: ID!
    userName: String
    password: String
    characters: [Character]!
  }

  type Query {
    Character(id: ID!): Character
    UsersCharacters: User
  }

  type Mutation {
    createCharacter(characterName: String!, strength: Int!, dexterity: Int!, constitution: Int!, intelligence: Int!, wisdom: Int!, charisma: Int!): Character
    updateCharacter(_id: ID!, characterName: String, strength: Int, dexterity: Int, constitution: Int, intelligence: Int, wisdom: Int, charisma: Int): Character
    deleteCharacter(_id: ID!): Character
	  createUser(userName: String!, password: String!): User
    updateUser(_id: ID!, userName: String!, password: String!): User
    deleteUser(_id: ID!): User
	  login(userName: String!, password: String!): User
	  logout(userName: String!, password: String!): User
  }
`;

module.exports = typeDefs;