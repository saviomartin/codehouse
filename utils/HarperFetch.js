export const harperFetch = async (body) => {
  const request = await fetch(process.env.DB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.DB_AUTHORIZATION}`,
    },
    body: JSON.stringify(body),
  });

  return request.json();
};
