import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T,
): Response<T> {
  const baseStorage = `github@${key}`;

  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(baseStorage);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(baseStorage, JSON.stringify(state));
  }, [baseStorage, state]);

  return [state, setState];
}
