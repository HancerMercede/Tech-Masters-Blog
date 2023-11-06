const endpoint = "http://localhost:3000/api";

export const GetRequest = (path) => {
  return fetch(`${endpoint}${path}`, {
    headers: {
      //   Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      "content-type": "application/json; charset=utf-8",
    },
  }).then((result) => result.json());
};