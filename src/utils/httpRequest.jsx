const endpoint = "http://localhost:3000";
const token = localStorage.getItem("token");
const authToken = JSON.parse(token);

export const GetRequest = (path) => {
  return fetch(`${endpoint}${path}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json; charset=utf-8",
    },
  }).then((result) => result.json());
};
