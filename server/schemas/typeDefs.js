const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Character 
	{
		_id: ID
		characterName: String
		strength: Int
		dexterity: Int
		constitution: Int
		intelligence: Int
		wisdom: Int
		charisma: Int
	}

	type User 
	{
		_id: ID
		userName: String
		password: String
		characters: [Character]
	}

	type Auth 
	{
		token: ID!
		user: User
	}

	type Query 
	{
		Character(id: ID!): Character
		Characters: [Character]
		Users: [User]
		User(id: ID!): User
	}

	type Mutation 
	{
		createCharacter(characterName: String!, strength: Int!, dexterity: Int!, constitution: Int!, intelligence: Int!, wisdom: Int!, charisma: Int!): Character

		updateCharacter(_id: ID!, characterName: String, strength: Int, dexterity: Int, constitution: Int, intelligence: Int, wisdom: Int, charisma: Int): Character

		deleteCharacter(_id: ID!): Character
		createUser(userName: String!, password: String!): Auth

		updateUser(_id: ID!, userName: String!, password: String!): User

		deleteUser(_id: ID!): User
		login(userName: String!, password: String!): Auth
		logout(userName: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;