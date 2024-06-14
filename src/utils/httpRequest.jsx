import axios from "axios";

const endpoint = "http://localhost:3000";
const token = localStorage.getItem("token");
const authToken = JSON.parse(token);

const GetRequest = (path) => {
  console.log(authToken);

  return fetch(`${endpoint}${path}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "content-type": "application/json; charset=utf-8",
    },
  }).then((result) => result.json());
};

const DeleteRequest = (path) => {
  console.log(`${endpoint}${path}`);
  axios.delete(`${endpoint}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    withCredentials: true,
  });
};

export { GetRequest, DeleteRequest };
