// meta data parser
var Meta = require("html-metadata-parser");

export default async function handler(req, res) {
  const websiteURL = req.query.url;

  Meta.parser(websiteURL, (err, result) => {
    if (err) {
      return res.status(400).json({
        message: "URL NOT FOUND",
      });
    } else {
      return res.status(200).json(result);
    }
  });
}
