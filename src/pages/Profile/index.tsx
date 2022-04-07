import { Button, CardRepository } from 'components';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IRepository, IUser } from 'shared/models';
import { useFetch } from 'utils/useFetch';
import { ProfileUser } from './components/ProfileUser';
import './styles.scss';

export function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useFetch<IUser>(`users/${username}`);
  const { data: repositoriesUser } = useFetch<IRepository[]>(
    `users/${username}/repos`,
  );
  const { data: repositoriesUserStarred } = useFetch<IRepository[]>(
    `users/${username}/starred`,
  );

  const [repositories, setRepositories] = useState<IRepository[] | null>(null);

  if (isLoading) {
    return <h2 style={{ textAlign: 'center' }}>Carregando...</h2>;
  }

  if (error || !data) {
    navigate('/');
  }

  return (
    <main className="profile">
      <header className="profile__header">
        {data && (
          <ProfileUser
            avatar_url={data.avatar_url}
            bio={data.bio}
            public_repos={data.public_repos}
            followers={data.followers}
            login={data.login}
            name={data.name}
          />
        )}
      </header>

      <div className="profile__contentButtons">
        <Button isLoading={false} onClick={() => setRepositories(repositoriesUser)}>
          Repositórios
        </Button>
        <Button isLoading={false} onClick={() => setRepositories(repositoriesUserStarred)}>
          Mais visitados
        </Button>
      </div>

      {repositories && (
        <section className="profile__contentCardsRepository">
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
