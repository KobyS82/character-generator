import { gql } from '@apollo/client';

export const QUERY_CHARACTERS = gql`
  query getCharacters {
    Characters {
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

export const QUERY_SINGLE_CHARACTER = gql`
query getSingleCharacter($id: ID!) { 
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
