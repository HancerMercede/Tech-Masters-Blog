import axios from "axios";

const endpoint = "http://localhost:1337" || "http://localhost:3000";
const GetRequest = (path) => {

  return fetch(`${endpoint}${path}`, {
    headers: {
      // Authorization: `Bearer ${authToken}`,
      "content-type": "application/json; charset=utf-8",
    },
  }).then((result) => result.json());
};


const GetCoverImage = (url)=>
{
  return `${endpoint}${url}`
}
export { GetRequest, GetCoverImage };
