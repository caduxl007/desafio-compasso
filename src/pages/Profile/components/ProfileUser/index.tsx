import { IUser } from 'shared/models';
import './styles.scss';

type ProfileUserProps = Omit<IUser, 'id'>;

export function ProfileUser({
  name,
  avatar_url,
  bio,
  followers,
  login,
  public_repos,
}: ProfileUserProps) {
  return (
    <div className="profileUser">
      <header className="profileUser__header">
        <img src={avatar_url} alt={name} className="profileUser__image" />

        <div>
          <h1 className="profileUser__name">{name}</h1>
          <p>{login}</p>
        </div>
      </header>

      {bio && <p className="profileUser__bio">{bio}</p>}

      <footer className="profileUser__footer">
        <div>
          <strong>{followers}</strong>
          <p>Seguidores</p>
        </div>

        <div>
          <strong>{public_repos}</strong>
          <p>Repositórios públicos</p>
        </div>
      </footer>
    </div>
  );
}
