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
        <p><strong>Stars:</strong> {stargazers_count}</p>
        <p><strong>Forks:</strong> {forks}</p>
        <p><strong>Stars:</strong> {watchers}</p>
      </div>
    </div>
  );
}
