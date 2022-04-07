export type IUser = {
  id: number;
  bio: string;
  name: string;
  avatar_url: string;
  login: string;
};

export type IRepository = {
  id: number;
  name: string;
  description: string | null;
  watchers: number;
  forks: number;
  stargazers_count: number;
};