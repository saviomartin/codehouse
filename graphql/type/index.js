//using gql
const { gql } = require("apollo-server");

// defining types
const typeDefs = gql`
  type User {
    id: ID
  }

  type Addedby {
    displayName: String
    email: String
  }

  type Cheatsheets {
    id: ID
    cheatsheet_name: String
    website_url: String
    category: String
    twitter_handle: String
    comments: Float
    upvotes: Float
    addedby: Addedby
  }

  type Categories {
    id: ID
    name: String
  }

  type Sources {
    id: ID
    hostname: String
    protocol: String
    favicon: String
    cheatsheets_count: Float
    cheatsheets: [Cheatsheets]
  }

  type Cheatsheet {
    id: ID
    cheatsheet_name: String
    description: String
    website_url: String
    cover_image: String
    source: String
    category: String
    twitter_handle: String
    comments: Float
    upvotes: Float
    addedby: Addedby
  }

  enum Sort {
    popular
    oldest
    newest
  }

  type Contributors {
    id: ID
    displayName: String
    email: String
    photoURL: String
  }

  type FeatureRequests {
    id: ID
    description: String
    status: String
    title: String
    type: String
    upvotes: String
    addedby: Addedby
  }

  type Query {
    cheatsheets(sort: Sort!): [Cheatsheets]
    categories: [Categories]
    sources: [Sources]
    review: [Cheatsheets]
    source(from: String!): [Cheatsheets]
    category(name: String!): [Cheatsheets]
    cheatsheet(id: ID!): Cheatsheet
    contributors: [Contributors]
    featureRequests: [FeatureRequests]
  }
`;

module.exports = typeDefs; // export
