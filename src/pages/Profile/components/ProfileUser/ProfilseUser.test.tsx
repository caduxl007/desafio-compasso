import { screen, render } from '@testing-library/react';
import { ProfileUser } from '.';

const MOCK_USER = {
  avatar_url: 'https://github.com/avatar',
  bio: 'bio',
  login: 'cadu',
  name: 'Eduardo',
  followers: 20,
  public_repos: 30,
};

describe('ProfileUser component', () => {
  it('renders correctly', () => {
    render(<ProfileUser {...MOCK_USER} />);

    expect(screen.getByText(MOCK_USER.bio)).toBeInTheDocument();
    expect(screen.getByText(MOCK_USER.name)).toBeInTheDocument();
    expect(screen.getByText(MOCK_USER.followers)).toBeInTheDocument();
    expect(screen.getByText(MOCK_USER.public_repos)).toBeInTheDocument();
    expect(screen.getByText(MOCK_USER.login)).toBeInTheDocument();
  });
});
