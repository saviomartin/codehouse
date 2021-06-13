export default async (req, res) => {
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

  const filteredCheatsheet = (website) => {
    return data.filter((cheatsheet) => {
      const url = new URL(cheatsheet.website_url);

      const cheatsheetName = url.hostname.toLowerCase();
      return cheatsheetName.includes(website.toLowerCase());
    });
  };

  const result = data.map((item) => {
    const url = new URL(item.website_url);

    return {
      id: item.id,
      hostname: url.hostname,
      protocol: item.protocol,
      favicon: `https://www.google.com/s2/favicons?domain_url=${url.hostname}`,
      cheatsheets_count: filteredCheatsheet(url.hostname).length,
      cheatsheets: filteredCheatsheet(url.hostname),
    };
  });

  res.status(200).json(result);
};
