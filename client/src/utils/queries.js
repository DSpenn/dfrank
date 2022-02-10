import { gql } from 'graphql.macro';
//import { gql } from '@apollo/client';
//import { gql } from 'graphql-tag';

export const QUERY_CHARACTERS = gql`
query GetCharacters($name: String, $id: ID) {
  characters(name: $name, _id: $id) {
      _id
      name
      clans
      rank
      __typename
    }
}
`;


export const QUERY_CHARRANK = gql`
query GetCharactersLite {
  characters {
      _id
      name
      rank
      clans
      __typename
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
  query GetAllFights($offset: Int, $limit: Int) {
    fights(offset: $offset, limit: $limit)  {
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


export const QUERY_DATE_FIGHTS = gql`
  query GetDateFights {
    fights {
      _id
      timeOf
      __typename
    }
  }
`;