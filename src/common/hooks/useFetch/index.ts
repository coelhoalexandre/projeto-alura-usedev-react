import { useEffect, useState } from 'react';
import HttpInterface from '../../interfaces/http.interface';
import Http from '../../lib/httpClient';

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

const useFetch = <T>(url: string, domain: string): FetchResult<T> => {
  const [data, setData] = useState<FetchResult<T>['data']>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<FetchResult<T>['error']>(null);

  const http: HttpInterface = Http();

  useEffect(() => {
    setIsLoading(true);

    http
      .get<T>(url)
      .then((response) => setData(response))
      .catch(() => setError(`Erro ao carregar dados de ${domain}!`));

    setIsLoading(false);
  }, [url, domain, http]);

  return { data, isLoading, error };
};

export default useFetch;
