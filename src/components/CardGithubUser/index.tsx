import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.scss';

type CardGithubUserProps = {
  name: string;
  username: string;
  avatar_url: string;
  bio: string;
};

export function CardGithubUser({
  name,
  username,
  avatar_url,
  bio,
}: CardGithubUserProps) {
  return (
    <div className="cardGithubUser">
      <Link to={username} className="cardGithubUser__link">
        <img className="cardGithubUser__image" src={avatar_url} alt={name} />
        <div className="cardGithubUser__info">
          <h3 className="cardGithubUser__title">
            <strong>{name}</strong>({username})
          </h3>

          <p className="cardGithubUser__description">{bio}</p>
        </div>

        <FiChevronRight size={20} className="cardGithubUser__svg" />
      </Link>
    </div>
  );
}