import { useDataGithub } from 'hooks/useDataGithub';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IRepository } from 'shared/models';
import {
  Button,
  CardGithubUser,
  SectionContentCardsRepository,
  Title,
} from '../../components';
import { FormSearch } from './components/FormSearch';
import './styles.scss';

export function Home() {
  const { user, repositoriesUser, repositoriesUserStarred, setUser } =
    useDataGithub();
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    setUser(undefined);
  }, [setUser]);

  return (
    <>
      <Helmet>
        <title>Desafio Compasso | Home</title>
        <meta
          name="description"
          content="Página de busca de usuários e de repositórios no Github"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <main className="home">
        <Title>Busque usuários no GitHub</Title>

        <FormSearch />

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
                data-message="teste"
                onClick={() => setRepositories(repositoriesUser)}
              >
                Repositórios
              </Button>
              <Button onClick={() => setRepositories(repositoriesUserStarred)}>
                Mais visitados
              </Button>
            </div>
          </section>
        )}

        <SectionContentCardsRepository repositories={repositories} />
      </main>
    </>
  );
}
