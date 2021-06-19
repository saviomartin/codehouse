import axios from "axios";

export default async (req, res) => {
  const request = await fetch(process.env.NEXT_PUBLIC_DB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.NEXT_PUBLIC_DB_AUTHORIZATION}`,
    },
    body: JSON.stringify({
      operation: "sql",
      sql: "SELECT * FROM dev.contributors",
    }),
  });

  let githubContributors = [];

  await fetch(
    "https://api.github.com/repos/saviomartin/gradientking/contributors"
  )
    .then((res) => res.json())
    .then((data) => {
      githubContributors = data.map((item) => {
        return {
          id: item.id,
          email: "",
          displayName: item.login,
          photoURL: item.avatar_url,
        };
      });
    });

  const data = await request.json();

  const result = data.map((item) => {
    return {
      id: item.id,
      email: item.email,
      displayName: item.displayName,
      photoURL: item.photoURL,
    };
  });

  res.status(200).json([...result, ...githubContributors]);
};
