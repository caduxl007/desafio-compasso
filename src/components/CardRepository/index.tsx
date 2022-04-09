import { HTMLAttributes } from 'react';
import { IRepository } from 'shared/models';
import './styles.scss';

interface CardRepositoryProps extends HTMLAttributes<HTMLDivElement> {
  repository: Omit<IRepository, 'id'>;
}

export function CardRepository({ repository, ...rest }: CardRepositoryProps) {
  const { name, description, watchers, forks, stargazers_count } = repository;

  return (
    <div {...rest} className="cardRepository">
      <div className="cardRepository__info">
        <h3>{name}</h3>
        {description && (
          <p className="cardRepository__description">{description}</p>
        )}
      </div>

      <div className="cardRepository__details">
        <p>
          <strong>Stars:</strong> {stargazers_count}
        </p>
        <p>
          <strong>Forks:</strong> {forks}
        </p>
        <p>
          <strong>Stars:</strong> {watchers}
        </p>
      </div>
    </div>
  );
}
