import { ReactNode } from 'react';

import './styles.scss';

type TitleProps = {
  children: ReactNode;
};

export function Title({ children }: TitleProps) {
  return <h1 className="title">{children}</h1>;
}
