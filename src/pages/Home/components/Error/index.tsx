import { HTMLAttributes } from 'react';
import './styles.scss';

interface ErrorProps extends HTMLAttributes<HTMLSpanElement> {}

export function Error({ children, ...rest }: ErrorProps) {
  return (
    <span className="error" {...rest}>
      {children}
    </span>
  );
}
