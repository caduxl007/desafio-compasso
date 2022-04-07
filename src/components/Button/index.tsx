import { ButtonHTMLAttributes } from 'react';

import './styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}

export function Button({ isLoading = false, children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="button">
      {isLoading ? 'Carregando...' : children}
    </button>
  );
}
