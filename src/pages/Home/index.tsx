import { FormEvent, useState } from 'react';
import { api } from 'services/api';
import { IRepository, IUser } from 'shared/models';
import { usePersistedState } from 'utils/usePersistedState';
import {
  Button,
  CardGithubUser,
  CardRepository,
  Title,
} from '../../components';
import { Error } from './components/Error';
import './styles.scss';

export function Home() {
  const [search, setSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [user, setUser] = useState<IUser>();
  const [isLoading, setIsLoading] = useState(false);
  const [_, setUsers] = usePersistedState<IUser[]>('users', []);
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [repositoriesUser, setRepositoriesUser] = useState<IRepository[]>([]);
  const [repositoriesUserStarred, setRepositoriesUserStarred] = useState<
    IRepository[]
  >([]);

  async function loadingRepositories(username: string) {
    try {
      const { data: repositoriesUser } = await api.get<IRepository[]>(
        `users/${username}/repos`,
      );

      const { data: repositoriesUserStarred } = await api.get<IRepository[]>(
        `users/${username}/starred`,
      );

      setRepositoriesUser(repositoriesUser);
      setRepositoriesUserStarred(repositoriesUserStarred);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!search) {
      setInputError('Digite o nome de um usuário');
      return;
    }

    try {
      setIsLoading(true);
      const { data } = await api.get<IUser>(`users/${search}`);

      const formattedData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        bio: data.bio,
      } as IUser;

      setInputError('');
      setSearch('');
      setUser(formattedData);

      //Filter users, remove user duplicate
      setUsers((oldState) => [
        ...oldState.filter((user) => user.id !== formattedData.id),
        formattedData,
      ]);

      await loadingRepositories(formattedData.login);
    } catch (err) {
      setInputError('Houve uma falha ao buscar o usuário');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="home">
      <Title>Busque usuários no GitHub</Title>

      <form className="home__form" onSubmit={handleSubmit}>
        <div className="home__form__content">
          <input
            className={`home__input ${inputError && 'home__input--error'}`}
            placeholder="Digite o nome de usuário"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
          <Button type="submit" isLoading={isLoading}>
            Pesquisar
          </Button>
        </div>
        {inputError && <Error>{inputError}</Error>}
      </form>

      {user && (
        <section className="home__contentCardsGithubUser">
          <CardGithubUser
            name={user.name}
            bio={user.bio}
            avatar_url={user.avatar_url}
            username={user.login}
          />

          <div className="home__contentButtons">
            <Button
              isLoading={false}
              onClick={() => setRepositories(repositoriesUser)}
            >
              Repositórios
            </Button>
            <Button
              isLoading={false}
              onClick={() => setRepositories(repositoriesUserStarred)}
            >
              Mais visitados
            </Button>
          </div>
        </section>
      )}

      {!!repositories.length && (
        <section className="home__contentCardsRepository">
          {repositories.map((data) => (
            <CardRepository
              key={String(data.id)}
              description={data.description}
              forks={data.forks}
              stargazers_count={data.stargazers_count}
              name={data.name}
              watchers={data.watchers}
            />
          ))}
        </section>
      )}
    </main>
  );
}
