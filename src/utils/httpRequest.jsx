const endpoint = import.meta.env.VITE_Development_URL;
const productionPath = "https://jubilant-prosperity-61d5a522c8.strapiapp.com"
const GetRequest = (path) => {
  console.log(endpoint)
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
