import { screen, render } from '@testing-library/react';
import { Button } from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button>Enviar</Button>);

    expect(screen.getByText(`Enviar`)).toBeInTheDocument();
  });

  it('is renders correctly text when loading', () => {
    render(<Button isLoading={true}>Enviar</Button>);

    expect(screen.getByText(`Carregando...`)).toBeInTheDocument();
  });
});