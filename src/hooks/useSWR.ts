import useSWR from "swr";

import { client } from "src/pages/api/config";

const fetcher = (url: string) => client.get(url).then(res => res.data);

export const useFetch = (url: string, option?: {}) => {
  const { data, error } = useSWR(url, fetcher, option);

  return {
    payload: data,
    isLoading: !error && !data,
    isError: error,
  };
};
