import { ButtonHTMLAttributes } from 'react';

import './styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

export function ButtonSearch({ isLoading = false, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="buttonSearch">
      {isLoading ? 'Carregando...' : 'Pesquisar'}
    </button>
  );
}
