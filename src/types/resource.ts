export type User = {
  id: string;
  name: string;
  username: string;
};

type Address = {
  street: string;
  city: string;
  suite: string;
};

type Company = {
  name: string;
};

export interface UserDetails extends User {
  email: string;
  phone: string;
  website: string;

  address: Address;
  company: Company;
}

export type Todo = {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
};

export type Photo = {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Album = {
  id: string;
  userId: string;
  title: string;
};

export type Comment = {
  id: string;
  postId: string;
  name: string;
  email: string;
  body: string;
};

export type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};
