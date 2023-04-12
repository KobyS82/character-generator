import { gql } from '@apollo/client';

export const CREATE_CHARACTER = gql`
    mutation createCharacter($characterName: String!, $strength: Int!, $dexterity: Int!, $constitution: Int!, $intelligence: Int!, $wisdom: Int!, $charisma: Int!){
      createCharacter(characterName: $characterName, strength: $strength, dexterity: $dexterity, constitution: $constitution, intelligence: $intelligence, wisdom: $wisdom, charisma: $charisma){
        characterName
        strength
        dexterity
        constitution
        intelligence
        wisdom
        charisma
      }
    }
`;

export const UPDATE_CHARACTER = gql`
   mutation createCharacter($_id: ID!, $characterName: String!, $strength: Int!, $dexterity: Int!, $constitution: Int!, $intelligence: Int!, $wisdom: Int!, $charisma: Int!){
    createCharacter(_id: $_id, characterName: $characterName, strength: $strength, dexterity: $dexterity, constitution: $constitution, intelligence: $intelligence, wisdom: $wisdom, charisma: $charisma){
      _id
      characterName
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
    }
  }
`;

export const DELETE_CHARACTER = gql`
  mutation deleteCharacter($_id: ID!) {
    deleteCharacter(_id: $_id){
      _id
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($userName: String!, $password: String!){
    createUser(userName: $userName, password: $password){
      userName
      password
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $userName: String!, $password: String!){
    updateUser(_id: $_id, userName: $userName, password: $password){
      _id
      userName
      password
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($_id: ID!) {
    deleteUser(_id: $_id){
      _id
    }
  }
`;

export const LOGIN = gql`
  mutation createUser($userName: String!, $password: String!){
    login(userName: $userName, password: $password){
      userName
      password
    }
  }
`;

export const LOGOUT = gql`
  mutation createUser($userName: String!, $password: String!){
    logout(userName: $userName, password: $password){
      userName
      password
    }
  }
`;