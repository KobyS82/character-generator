import { gql } from '@apollo/client';

export const QUERY_CHARACTERS = gql`
  query getCharacter {
    UsersCharacters{
      __id
      userName
      characters
    }
  }
`;

export const QUERY_SINGLE_CHARACTER = gql`
query getSingleCharacter($id: ID!): 
  Character(id: $id) {
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
