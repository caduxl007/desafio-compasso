import { CardGithubUser, Title } from 'components';
import { IUser } from 'shared/models';
import { usePersistedState } from 'utils/usePersistedState';

import './styles.scss';

export function Recents() {
  const [users] = usePersistedState<IUser[]>('users', []);

  console.log(users);

  return (
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
  );
}
