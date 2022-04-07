import { IRepository } from 'shared/models';
import './styles.scss';

type CardRepositoryProps = Omit<IRepository, 'id'>;

export function CardRepository({
  name,
  description,
  watchers,
  forks,
  stargazers_count,
}: CardRepositoryProps) {
  return (
    <div className="cardRepository">
      <div className="cardRepository__info">
        <h3>{name}</h3>
        {description && (
          <p className="cardRepository__description">{description}</p>
        )}
      </div>

      <div className="cardRepository__details">
        <h5>Stars: {stargazers_count}</h5>
        <h5>Forks: {forks}</h5>
        <h5>Watch: {watchers}</h5>
      </div>
    </div>
  );
}
