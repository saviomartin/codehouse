export default async (req, res) => {
  const request = await fetch(process.env.NEXT_PUBLIC_DB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.NEXT_PUBLIC_DB_AUTHORIZATION}`,
    },
    body: JSON.stringify({
      operation: "sql",
      sql: "SELECT * FROM dev.requests",
    }),
  });

  const data = await request.json();

  const result = data.map((item) => {
    return {
      id: item.id,
      description: item.description,
      status: item.status,
      title: item.title,
      type: item.type,
      upvotes: item.upvotes.length,
      addedby: item.addedby,
    };
  });

  res.status(200).json(result);
};
