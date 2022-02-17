import { gql } from 'graphql-tag';
//import { gql } from 'graphql.macro';
//import { gql } from '@apollo/client';

export const QUERY_CHARACTERS = gql`
query GetCharacters($name: String, $id: ID) {
  characters(name: $name, _id: $id) {
      name
      clans
      rank
    }
}
`;


export const QUERY_CHARRANK = gql`
query GetCharactersLite {
  characters {
      name
      rank
      clans
    }
}
`;

export const QUERY_CHARACTER = gql`
query GetCharacter($name: String, $id: ID) {
  character(name: $name, _id: $id) {
    _id
    name
    rank
    clans
    fights {
      _id
      timeOf
      winnerName
      winnerClan
      winnerRank
      killorGank
      loserRank
      loserName
      loserClan
    }
  }
}
`;

export const QUERY_FIGHT = gql`
query GetFight($id: ID) {
  fight(_id: $id) {
      _id
      timeOf
      winnerName
      winnerClan
      winnerRank
      killorGank
      loserName
      loserClan
      loserRank
      __typename
    }
  }
`;

export const QUERY_FIGHTS = gql`
  query GetFights($winnerName: String, $loserName: String) {
    fights(winnerName: $winnerName, loserName: $loserName) {
      _id
      timeOf
      winnerName
      winnerClan
      winnerRank
      killorGank
      loserName
      loserClan
      loserRank
      __typename  
    }
  }
`;

export const QUERY_ALL_FIGHTS = gql`
  query GetAllFights {
    fights {
      _id
      timeOf
      winnerName
      winnerClan
      winnerRank
      killorGank
      loserName
      loserClan
      loserRank
    }
  }
`;


export const QUERY_DATE_FIGHTS = gql`
  query GetDateFights {
    fights {
      _id
      timeOf
      __typename
    }
  }
`;