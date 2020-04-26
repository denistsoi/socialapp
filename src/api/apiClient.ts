import {
  User,
  UserDetails,
  Todo,
  Photo,
  Album,
  Comment,
  Post
} from "../types/resource";

import { Options, UserId } from "../types/apiClient";

const SOURCE_URL = "https://jsonplaceholder.typicode.com";

const fetchResource = (
  resource: string,
  options?: Options
): Promise<Array<any>> => {
  let resourceURL = `${SOURCE_URL}/`;

  if (resource) {
    resourceURL += `${resource}`;
  }

  if (resource && options) {
    const qs = Object.entries(options)
      .map((entry) => {
        const [key, value] = entry;
        return `_${key}=${value}`;
      })
      .join("&");

    if (qs) resourceURL += `?${qs}`;
  }

  return fetch(`${resourceURL}`).then((res) => res.json());
};

/**
 * export
 */
export const getUserDetails = (id = "1"): Promise<UserDetails> => {
  return fetch(`${SOURCE_URL}/users/${id}`).then((res) => res.json());
};

export const getUsers = ({ limit = 10 }: Options = {}): Promise<
  Array<User>
> => {
  return fetchResource("users", {
    limit
  });
};

/**
 * Resources
 */

export const getTodos = ({ userId = 1 }: UserId): Promise<Array<Todo>> => {
  return fetch(`${SOURCE_URL}/todos?userId=${userId}`).then((res) =>
    res.json()
  );
};

export const getPhotos = ({ userId = 1 }: UserId): Promise<Array<Photo>> => {
  return fetch(`${SOURCE_URL}/photos?userId=${userId}`).then((res) =>
    res.json()
  );
};

export const getAlbums = ({ userId = 1 }: UserId): Promise<Array<Album>> => {
  return fetch(`${SOURCE_URL}/albums?userId=${userId}`).then((res) =>
    res.json()
  );
};

export const getComments = ({
  userId = 1
}: UserId): Promise<Array<Comment>> => {
  return fetch(`${SOURCE_URL}/comments?userId=${userId}`).then((res) =>
    res.json()
  );
};

export const getPosts = ({ userId = 1 }: UserId): Promise<Array<Post>> => {
  return fetch(`${SOURCE_URL}/posts?userId=${userId}`).then((res) =>
    res.json()
  );
};
