import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CardGithubUser } from '.';

const MOCK_USER = {
  avatar_url: 'https://github.com/avatar',
  bio: 'bio',
  username: 'cadu',
  name: 'Eduardo',
};

describe('CardGithubUser component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <CardGithubUser {...MOCK_USER} />
      </MemoryRouter>,
    );

    expect(screen.getByText(MOCK_USER.bio)).toBeInTheDocument();
    expect(screen.getByText(MOCK_USER.name)).toBeInTheDocument();
    expect(screen.getByText(`(${MOCK_USER.username})`)).toBeInTheDocument();
  });
});
