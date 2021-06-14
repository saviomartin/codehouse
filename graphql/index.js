const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");
const typeDefs = require("./type/index");
const resolvers = require("./resolver/index");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
