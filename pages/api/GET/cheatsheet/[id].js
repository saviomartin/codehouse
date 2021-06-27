export default async (req, res) => {
  const { id } = req.query;

  const request = await fetch(process.env.NEXT_PUBLIC_DB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.NEXT_PUBLIC_DB_AUTHORIZATION}`,
    },
    body: JSON.stringify({
      operation: "sql",
      sql: "SELECT * FROM dev.cheatsheets",
    }),
  });

  const data = await request.json();

  const result = data.filter((cheatsheet) => {
    const cheatId = cheatsheet.id;
    return cheatId.includes(id);
  })[0];

  const metaRequest = await fetch(
    `https://codehouse.vercel.app/api/META/parser?url=${result.website_url}`,
    {
      method: "GET",
    }
  );

  const meta = await metaRequest.json();

  const url = new URL(result.website_url);

  // generating image for thumbnail
  const image = () => {
    if (meta.og.images.length) {
      return meta.og.images[0].url;
    } else if (meta.og.image) {
      return meta.og.image;
    } else {
      return "https://codehouse.vercel.app/assets/image-not-found.jpg"; // not found image
    }
  };

  res.status(200).json({
    id: result.id,
    cheatsheet_name: result.cheatsheet_name,
    description: meta.meta.description,
    website_url: result.website_url,
    cover_image: image(),
    source: url.origin,
    category: result.category,
    twitter_handle: result.twitter_handle,
    comments: result.comments.length,
    upvotes: result.upvotes.length,
    addedby: result.addedby,
  });
};
