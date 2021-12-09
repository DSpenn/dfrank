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
query Characters {
  characters {
      _id
      name
      clans
      rank
      __typename
    }
}
`;


export const QUERY_FIGHT = gql`
query Fight($id: ID) {
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

export const QUERY_CHARACTER = gql`
query GetCharacter($name: String, $id: ID) {
  character(name: $name, _id: $id) {
    _id
    name
    rank
    clans
    __typename
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
      __typename
    }
  }
}
`;

export const QUERY_FIGHTS = gql`
  query Fights($winnerName: String, $loserName: String) {
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
    }
    __typename
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
      __typename
    }
  }
`;