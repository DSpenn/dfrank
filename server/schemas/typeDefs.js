const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Character {
  _id: ID
  name: String!
  clans: [String]
  rank: Int
  race: String
  fights: [Fight]
}

type Fight {
  _id: ID
  timeOf: DateTime
  winnerName: String
  loserName: String
  winnerClan: String
  loserClan: String
  killorGank: String
  winnerRank: Int
  loserRank: Int
}

type User {
  username: String
  email: String
  password: String
}

input FightInput {
  timeOf: DateTime!
  winnerName: String!
  loserName: String!
  winnerClan: String
  loserClan: String
  killorGank: killorGank!
  winnerRank: Int
  loserRank: Int
}

input CharacterInput {
  name: String!
  clans: [String]
  rank: Int
  race: String
  fights: [ID]
}

type Auth {
  token: ID
  user: User
}

type TimeLine {
  _id: DateTime
  fightCount: Int
  uNames: Int
}

type Query {
  character(name: String, _id: ID): Character
  characters(_id: ID, name: String): [Character]
  fights: [Fight]!
  fight(_id: ID): Fight
  timeline: [TimeLine]
  users: [User]
  user: User
  me: User
}

type Mutation {
  addCharacter(input: CharacterInput): Character
  addFight(input: FightInput): Fight
}

enum killorGank {
  KILL
  GANK
}

scalar DateTime

`;

module.exports = typeDefs;
