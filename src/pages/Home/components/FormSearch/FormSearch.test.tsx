import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormSearch } from '.';
import * as hookDataGithub from 'hooks/useDataGithub';

describe('FormSearch component', () => {
  it('renders without crashing', () => {
    render(<FormSearch />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByTestId('form__component')).toBeInTheDocument();
  });

  it('call loadingDataUser function when sending submit event', () => {
    const loadingDataUserMock = jest.fn();

    jest.spyOn(hookDataGithub, 'useDataGithub').mockReturnValue({
      user: undefined,
      setUser: jest.fn(),
      repositoriesUser: [],
      repositoriesUserStarred: [],
      isLoading: false,
      loadingDataUser: loadingDataUserMock,
    });

    render(<FormSearch />, {
      wrapper: BrowserRouter,
    });

    const input = screen.getByTestId('form__input');
    const form = screen.getByTestId('form__component');

    fireEvent.change(input, { target: { value: 'github' } });
    fireEvent.submit(form);

    expect(loadingDataUserMock).toBeCalled();
  });

  it('not call loadingDataUser function if input is empty', () => {
    const loadingDataUserMock = jest.fn();

    jest.spyOn(hookDataGithub, 'useDataGithub').mockReturnValue({
      user: undefined,
      setUser: jest.fn(),
      repositoriesUser: [],
      repositoriesUserStarred: [],
      isLoading: false,
      loadingDataUser: loadingDataUserMock,
    });

    render(<FormSearch />, {
      wrapper: BrowserRouter,
    });

    const input = screen.getByTestId('form__input');
    const form = screen.getByTestId('form__component');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(form);

    expect(loadingDataUserMock).not.toBeCalled();
    expect(screen.getByText('Digite o nome de um usuário')).toBeInTheDocument();
  });
});
