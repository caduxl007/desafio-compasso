export type IUser = {
  id: number;
  bio: string;
  name: string;
  avatar_url: string;
  login: string;
  public_repos: number;
  followers: number;
};

export type IRepository = {
  id: number;
  name: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
};