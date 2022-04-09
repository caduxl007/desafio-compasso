import { HTMLAttributes } from 'react';
import { IRepository } from 'shared/models';
import './styles.scss';

interface CardRepositoryProps extends HTMLAttributes<HTMLDivElement> {
  repository: Omit<IRepository, 'id'>;
}

export function CardRepository({ repository, ...rest }: CardRepositoryProps) {
  const { name, watchers, forks, stargazers_count } = repository;

  return (
    <div {...rest} className="cardRepository">
      <div className="cardRepository__info">
        <h4>{name}</h4>
      </div>

      <div className="cardRepository__details">
        <p className="cardRepository__data">
          <strong>Stars:</strong> {stargazers_count}
        </p>
        <p className="cardRepository__data">
          <strong>Forks:</strong> {forks}
        </p>
        <p className="cardRepository__data">
          <strong>Stars:</strong> {watchers}
        </p>
      </div>
    </div>
  );
}
