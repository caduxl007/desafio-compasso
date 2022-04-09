import React, { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from 'services/api';
import { IRepository, IUser } from 'shared/models';
import { usePersistedState } from '../utils/usePersistedState';

interface DataGithubContextData {
  user: IUser | undefined;
  setUser: (user: IUser | undefined) => void;
  repositoriesUser: IRepository[];
  repositoriesUserStarred: IRepository[];
  isLoading: boolean;
  loadingDataUser: (search: string) => void;
}

const DataGihubContext = createContext<DataGithubContextData>(
  {} as DataGithubContextData,
);

const DataGithubProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const navigate = useNavigate();
  const [_, setUsers] = usePersistedState<IUser[]>('users', []);
  const [isLoading, setIsLoading] = useState(false);
  const [repositoriesUser, setRepositoriesUser] = useState<IRepository[]>([]);
  const [repositoriesUserStarred, setRepositoriesUserStarred] = useState<
    IRepository[]
  >([]);

  const loadingDataRepositories = useCallback(async (username: string) => {
    const { data: repositoriesUser } = await api.get<IRepository[]>(
      `users/${username}/repos`,
    );

    const { data: repositoriesUserStarred } = await api.get<IRepository[]>(
      `users/${username}/starred`,
    );

    setRepositoriesUser(repositoriesUser);
    setRepositoriesUserStarred(repositoriesUserStarred);
  }, []);

  const loadingDataUser = useCallback(
    async (search: string) => {
      setIsLoading(true);
      try {
        const { data } = await api.get<IUser>(`users/${search}`);

        const formattedData = {
          id: data.id,
          name: data.name,
          login: data.login,
          avatar_url: data.avatar_url,
          bio: data.bio,
          followers: data.followers,
          public_repos: data.public_repos,
        } as IUser;

        setUser(formattedData);

        //Filter users, remove user duplicate
        setUsers((oldState) => [
          ...oldState.filter((user) => user.id !== formattedData.id),
          formattedData,
        ]);

        loadingDataRepositories(formattedData.login);
      } catch (err) {
        navigate('/')
        toast.error('Houve uma falha ao buscar os dados do usuário :(');
      } finally {
        setIsLoading(false);
      }
    },
    [loadingDataRepositories, setUsers, navigate],
  );

  return (
    <DataGihubContext.Provider
      value={{
        user,
        setUser,
        repositoriesUser,
        repositoriesUserStarred,
        isLoading,
        loadingDataUser,
      }}
    >
      {children}
    </DataGihubContext.Provider>
  );
};

export function useDataGithub(): DataGithubContextData {
  const context = useContext(DataGihubContext);

  if (!context) {
    throw new Error('useDataGithu must be used within an ThemeProvider');
  }

  return context;
}

export { DataGihubContext, DataGithubProvider };
