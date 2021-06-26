// uuid
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  req.body = JSON.parse(req.body);
  const { cheatsheet_id, addedby, description, type, website_url } = req.body;

  let uuid = uuidv4().replace(/-/g, "");

  const request = await fetch(process.env.NEXT_PUBLIC_DB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.NEXT_PUBLIC_DB_AUTHORIZATION}`,
    },
    body: JSON.stringify({
      operation: "insert",
      schema: "dev",
      table: "reported",
      records: [
        {
          cheatsheet_id: cheatsheet_id,
          website_url: website_url,
          type: type,
          description: description,
          addedby: addedby,
        },
      ],
    }),
  });

  const data = await request.json();

  res.status(200).json({ data });
}
