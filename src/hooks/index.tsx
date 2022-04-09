import { ReactNode } from 'react';
import { DataGithubProvider } from './useDataGithub';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return <DataGithubProvider>{children}</DataGithubProvider>;
}
