import { ReactNode } from 'react';

import './styles.scss';

type TitleProps = {
  children: ReactNode;
};

export function Title({ children }: TitleProps) {
  return <h2 className="title">{children}</h2>;
}
