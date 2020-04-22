const SOURCE_URL = "https://jsonplaceholder.typicode.com";

type API = {
  posts: response;
};

type response = {};

const api = (): API => {
  const fetcher = (resource: string): response => {
    return fetch(`${SOURCE_URL}/${resource}`)
      .then((r) => r.json())
      .catch((err) => err);
  };

  return {
    posts: fetcher("posts"),
  };
};

export default api;
