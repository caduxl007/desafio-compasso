import { useEffect } from 'react';
import { useState } from 'react';
import { api } from 'services/api';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadingData() {
      try {
        const response = await api.get(url);

        setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadingData();
  }, [url]);

  return { data, error, isLoading };
}
