import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Button, SectionContentCardsRepository } from 'components';
import { IRepository } from 'shared/models';
import { ProfileUser } from './components/ProfileUser';
import { useDataGithub } from 'hooks/useDataGithub';

import './styles.scss';

export function Profile() {
  const { username } = useParams();
  const { user, repositoriesUser, repositoriesUserStarred, loadingDataUser } =
    useDataGithub();

  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    if (username && username !== user?.login) {
      loadingDataUser(username);
    }
  }, [username, user, loadingDataUser]);

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
        {user && (
          <>
            <header className="profile__header">
              <ProfileUser
                avatar_url={user.avatar_url}
                bio={user.bio}
                public_repos={user.public_repos}
                followers={user.followers}
                login={user.login}
                name={user.name}
              />
            </header>

            <div className="profile__contentButtons">
              <Button onClick={() => setRepositories(repositoriesUser)}>
                Repositórios
              </Button>
              <Button onClick={() => setRepositories(repositoriesUserStarred)}>
                Mais visitados
              </Button>
            </div>
          </>
        )}

        <SectionContentCardsRepository repositories={repositories} />
      </main>
    </>
  );
}
