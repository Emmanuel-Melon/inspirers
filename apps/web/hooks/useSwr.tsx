import useSWR, { Key, Fetcher, useSWRConfig } from "swr";
import { client } from "../utils/client";

export const fetcher: Fetcher<any, any> = (url: string) =>
client.get(url).then((res: { data: any }) => res.data);

export const useFetch = (url: string) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePost = (url: string, { updater, request }) => {
  const { mutate } = useSWRConfig();
  const fetcher: Fetcher<any, any> = (url: string) =>
    client.post(url, request).then((res: { data: any }) => res.data);
};
