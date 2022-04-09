import { screen, render as renderJest } from '@testing-library/react';
import { Button } from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    renderJest(<Button>Enviar</Button>);

    expect(screen.getByText(`Enviar`)).toBeInTheDocument();
  });

  it('is renders correctly text when loading', () => {
    renderJest(<Button isLoading={true}>Enviar</Button>);

    expect(screen.getByText(`Carregando...`)).toBeInTheDocument();
  });
});