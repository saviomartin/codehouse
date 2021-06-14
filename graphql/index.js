// appolo server
const { ApolloServer } = require("apollo-server");

// types and resolvers
const typeDefs = require("./type/index");
const resolvers = require("./resolver/index");

// creating server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // important
  playground: true, // important
});

let port = process.env.PORT || 4000; // port

// listening server on 400
server.listen({ port: port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
