import { Helmet } from 'react-helmet-async';

import { Button, CardRepository } from 'components';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IRepository, IUser } from 'shared/models';
import { useFetch } from 'utils/useFetch';
import { ProfileUser } from './components/ProfileUser';
import './styles.scss';

export default function Profile() {
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

  // if (isLoading) {
  //   return <h2 style={{ textAlign: 'center' }}>Carregando...</h2>;
  // }

  useEffect(() => {
    if (error) {
      navigate('/');
    }
  }, [error, data, navigate]);

  return (
    <>
      <Helmet>
        <title>Desafio Compasso | {username}</title>
        <meta
          name="description"
          content={`Detalhes da conta e repositórios do usuario ${username}`}
        />
        <link rel="canonical" href={`/${username}`} />
      </Helmet>
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
          <Button onClick={() => setRepositories(repositoriesUser)}>
            Repositórios
          </Button>
          <Button onClick={() => setRepositories(repositoriesUserStarred)}>
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
    </>
  );
}
