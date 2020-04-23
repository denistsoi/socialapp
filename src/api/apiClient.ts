import { User, Todo, Photo, Album, Comment, Post } from "../types/resource";

const SOURCE_URL = "https://jsonplaceholder.typicode.com";

type Options = {
  limit?: number;
  start?: number;
};

const fetchResource = (
  resource: string,
  options?: Options
): Promise<Array<T>> => {
  let resourceURL = `${SOURCE_URL}/`;

  if (resource) {
    resourceURL += `${resource}`;
  }

  if (resource && options) {
    const qs = Object?.entries(options)
      ?.map((entry) => {
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
export const getUsers = ({ limit = 10 }: Options = {}): Promise<
  Array<User>
> => {
  return fetchResource("users", {
    limit
  });
};

export const getTodos = ({ limit = 10, start = 0 }: Options = {}): Promise<
  Array<Todo>
> => {
  return fetchResource("todos", { limit, start });
};

export const getPhotos = ({ limit = 10, start = 0 }: Options = {}): Promise<
  Array<Photo>
> => {
  return fetchResource("photos", { limit, start });
};

export const getAlbums = ({ limit = 10, start = 0 }: Options = {}): Promise<
  Array<Album>
> => {
  return fetchResource("albums", { limit, start });
};

export const getComments = ({ limit = 10, start = 0 }: Options = {}): Promise<
  Array<Comment>
> => {
  return fetchResource("comments", { limit, start });
};

export const getPosts = ({ limit = 10, start = 0 }: Options = {}): Promise<
  Array<Post>
> => {
  return fetchResource("posts", {
    limit,
    start
  });
};
