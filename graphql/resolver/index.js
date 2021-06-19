// axios
const { default: axios } = require("axios");

// resolvers
const resolvers = {
  Query: {
    cheatsheets: async (_, args) => {
      try {
        const cheatsheets = await axios.get(
          `http://codehouse.vercel.app/api/cheatsheets/${args.sort}`
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
    review: async () => {
      try {
        const cheatsheets = await axios.get(
          "http://codehouse.vercel.app/api/review"
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
    categories: async () => {
      try {
        const categories = await axios.get(
          "http://codehouse.vercel.app/api/categories"
        );
        return categories.data.map(({ id, name }) => ({
          id,
          name,
        }));
      } catch (error) {
        throw error;
      }
    },
    sources: async () => {
      try {
        const sources = await axios.get(
          "http://codehouse.vercel.app/api/sources"
        );
        return sources.data.map(
          ({
            id,
            hostname,
            protocol,
            favicon,
            cheatsheets_count,
            cheatsheets,
          }) => ({
            id,
            hostname,
            protocol,
            favicon,
            cheatsheets_count,
            cheatsheets,
          })
        );
      } catch (error) {
        throw error;
      }
    },
    source: async (_, args) => {
      try {
        const cheatsheets = await axios.get(
          `http://codehouse.vercel.app/api/source/${args.from}`
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
    category: async (_, args) => {
      try {
        const cheatsheets = await axios.get(
          `http://codehouse.vercel.app/api/category/${args.name}`
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
    cheatsheet: async (_, args) => {
      try {
        const cheatsheet = await axios.get(
          `http://codehouse.vercel.app/api/cheatsheet/${args.id}`
        );
        return {
          id: cheatsheet.data.id,
          cheatsheet_name: cheatsheet.data.cheatsheet_name,
          description: cheatsheet.data.description,
          website_url: cheatsheet.data.website_url,
          cover_image: cheatsheet.data.cover_image,
          source: cheatsheet.data.source,
          category: cheatsheet.data.category,
          twitter_handle: cheatsheet.data.twitter_handle,
          comments: cheatsheet.data.comments.length,
          upvotes: cheatsheet.data.upvotes.length,
          addedby: cheatsheet.data.addedby,
        };
      } catch (error) {
        throw error;
      }
    },
    contributors: async () => {
      try {
        const contributors = await axios.get(
          "http://codehouse.vercel.app/api/contributors"
        );
        return contributors.data.map(
          ({ id, displayName, email, photoURL }) => ({
            id,
            displayName,
            email,
            photoURL,
          })
        );
      } catch (error) {
        throw error;
      }
    },
    featureRequests: async () => {
      try {
        const featureRequests = await axios.get(
          "http://codehouse.vercel.app/api/feature-requests"
        );
        return featureRequests.data.map(
          ({ id, description, status, title, type, upvotes, addedby }) => ({
            id,
            description,
            status,
            title,
            type,
            upvotes,
            addedby,
          })
        );
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers; // exporting
