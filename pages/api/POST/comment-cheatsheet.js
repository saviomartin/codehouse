// uuid
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  req.body = JSON.parse(req.body);
  const { id, comments } = req.body;

  let uuid = uuidv4().replace(/-/g, "");

  const request = await fetch(process.env.NEXT_PUBLIC_DB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.NEXT_PUBLIC_DB_AUTHORIZATION}`,
    },
    body: JSON.stringify({
      operation: "update",
      schema: "dev",
      table: "cheatsheets",
      records: [
        {
          id: id,
          comments: comments,
        },
      ],
    }),
  });

  const data = await request.json();

  res.status(200).json({ data });
}
