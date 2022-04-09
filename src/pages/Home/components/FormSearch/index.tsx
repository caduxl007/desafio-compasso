import { FormEvent, useState } from 'react';
import { Button } from 'components';
import { Error } from '../Error';
import { useDataGithub } from 'hooks/useDataGithub';

import './styles.scss';

export function FormSearch() {
  const [search, setSearch] = useState('');
  const [inputError, setInputError] = useState('');

  const { loadingDataUser, isLoading } = useDataGithub();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!search.trim()) {
      setInputError('Digite o nome de um usuário');
      return;
    }

    loadingDataUser(search);

    setInputError('');
    setSearch('');
  }

  return (
    <form
      data-testid="form__component"
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="form__content">
        <input
          className={`form__input ${inputError && 'form__input--error'}`}
          placeholder="Digite o nome de usuário"
          value={search}
          data-testid="form__input"
          onChange={({ target }) => setSearch(target.value)}
        />
        <Button data-testid="form__button" type="submit" isLoading={isLoading}>
          Pesquisar
        </Button>
      </div>
      {inputError && <Error>{inputError}</Error>}
    </form>
  );
}
