const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
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
    comments: Int
    upvotes: Int
    addedby: Addedby
  }

  type Query {
    cheatsheets: [Cheatsheets]
    user(id: String!): User!
  }
`;

const resolvers = {
  Query: {
    cheatsheets: async () => {
      try {
        const cheatsheets = await axios.get(
          "http://codehouse.vercel.app/api/cheatsheets/popular"
        );
        return cheatsheets.data.map(
          ({
            id,
            cheatsheet_name,
            website_url,
            category,
            twitter_handle,
            comments,
            upvotes,
            addedby,
          }) => ({
            id,
            cheatsheet_name,
            website_url,
            category,
            twitter_handle,
            comments,
            upvotes,
            addedby,
          })
        );
      } catch (error) {
        throw error;
      }
    },
    user: async (_, args) => {
      try {
        const user = await axios.get(`https://api.github.com/users/${args.id}`);
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
