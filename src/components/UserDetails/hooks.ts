import { useEffect, useState } from "react";
import { getPosts, getAlbums, getTodos } from "../../api/apiClient";
import { Album, Post, Todo } from "../../types/resource";

export const useUserAlbumsHook = (
  userId: string
): { albums: Array<Album>; loadingAlbums: boolean } => {
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [loadingAlbums, setLoading] = useState(true);

  useEffect(() => {
    getAlbums({ userId: parseInt(userId) }).then((response) => {
      setAlbums(response);
      setLoading(false);
    });
    return (): void => setAlbums([]);
  }, [loadingAlbums]);

  return { albums, loadingAlbums };
};

export const useUserPostsHook = (
  userId: string
): { posts: Array<Post>; loadingPosts: boolean } => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [loadingPosts, setLoading] = useState(true);

  useEffect(() => {
    getPosts({ userId: parseInt(userId) }).then((response) => {
      setPosts(response);
      setLoading(false);
    });
    return (): void => setPosts([]);
  }, []);

  return { posts, loadingPosts };
};

export const useUserTodosHook = (
  userId: string
): { todos: Array<Todo>; loadingTodos: boolean } => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [loadingTodos, setLoading] = useState(true);
  useEffect(() => {
    getTodos({ userId: parseInt(userId) }).then((response) => {
      setTodos(response);
      setLoading(false);
    });

    return (): void => setTodos([]);
  }, []);

  return { todos, loadingTodos };
};
