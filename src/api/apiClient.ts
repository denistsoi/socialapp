const SOURCE_URL = "https://jsonplaceholder.typicode.com";

import User from "../types/user";

export const getUsers = (): Promise<Array<User>> => {
  return fetch(`${SOURCE_URL}/users`).then((res) => res.json());
};
