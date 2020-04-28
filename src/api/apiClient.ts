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

export const controller = new AbortController();
const { signal } = controller;

const fetchResource = <T>(
  resource: string,
  options?: Options
): Promise<Array<T>> => {
  let resourceURL = `${SOURCE_URL}/`;

  if (resource) {
    resourceURL += `${resource}`;
  }

  if (resource && options) {
    const qs = Object.entries(options)
      .map((entry) => {
        const [key, value] = entry;
        return `${key}=${value}`;
      })
      .join("&");

    if (qs) resourceURL += `?${qs}`;
  }

  return fetch(`${resourceURL}`, { signal }).then((res) => res.json());
};

/**
 * export
 */
export const getUserDetails = (id = "1"): Promise<UserDetails> => {
  return fetch(`${SOURCE_URL}/users/${id}`, { signal }).then((res) =>
    res.json()
  );
};

export const getUsers = ({ _limit = 10 }: Options = {}): Promise<
  Array<User>
> => {
  return fetchResource("users", { _limit });
};

/**
 * Resources
 */

export const getTodos = ({ userId = 1 }: UserId): Promise<Array<Todo>> => {
  return fetchResource("todos", { userId });
};

export const getPhotos = ({
  albumId = 1,
  _limit = 20,
  _start = 0
}: Options = {}): Promise<Array<Photo>> => {
  return fetchResource("photos", { albumId, _start, _limit });
};

export const getAlbums = ({ userId = 1 }: UserId): Promise<Array<Album>> => {
  return fetchResource("albums", { userId });
};

export const getComments = ({
  userId = 1,
  _limit = 10,
  _start = 0
}: Options = {}): Promise<Array<Comment>> => {
  return fetchResource("comments", { userId, _start, _limit });
};

export const getPosts = ({
  userId = 1,
  _limit = 10,
  _start = 0
}: Options = {}): Promise<Array<Post>> => {
  return fetchResource("posts", { userId, _start, _limit });
};
