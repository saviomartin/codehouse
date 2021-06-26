// uuid
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  req.body = JSON.parse(req.body);
  const { email } = req.body;

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
      table: "subscribers",
      records: [
        {
          email: email,
        },
      ],
    }),
  });

  const data = await request.json();

  res.status(200).json({ data });
}
