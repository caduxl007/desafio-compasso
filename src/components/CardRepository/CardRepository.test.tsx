import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { IRepository } from 'shared/models';
import { CardRepository } from '.';

const MOCK_REPOSITORY = {
  name: 'Eduardo',
  forks: 10,
  stargazers_count: 50,
  watchers: 30,
} as Omit<IRepository, ' id'>;

describe('CardRepository component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <CardRepository repository={MOCK_REPOSITORY} />
      </MemoryRouter>,
    );

    expect(screen.getByText(MOCK_REPOSITORY.forks)).toBeInTheDocument();
    expect(
      screen.getByText(MOCK_REPOSITORY.stargazers_count),
    ).toBeInTheDocument();
    expect(screen.getByText(MOCK_REPOSITORY.watchers)).toBeInTheDocument();
    expect(screen.getByText(MOCK_REPOSITORY.name)).toBeInTheDocument();
  });
});
