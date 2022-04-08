import { Helmet } from 'react-helmet-async';

import { CardGithubUser, Title } from 'components';
import { IUser } from 'shared/models';
import { usePersistedState } from 'utils/usePersistedState';

import './styles.scss';

export default function Recents() {
  const [users] = usePersistedState<IUser[]>('users', []);

  return (
    <>
      <Helmet>
        <title>Desafio Compasso | Recentes</title>
        <meta
          name="description"
          content="Página dos usuários recentes que foram buscados"
        />
        <link rel="canonical" href="/recents" />
      </Helmet>
      <main className="recents">
        <Title>Usuários buscados recentemente</Title>

        <section className="recents__contentCards">
          {users.length ? (
            users.map((user) => (
              <CardGithubUser
                key={String(user.id)}
                name={user.name}
                bio={user.bio}
                avatar_url={user.avatar_url}
                username={user.login}
              />
            ))
          ) : (
            <p>Você ainda não fez nenhuma busca :(</p>
          )}
        </section>
      </main>
    </>
  );
}
