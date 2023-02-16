import useSWR, { Key, Fetcher, useSWRConfig } from "swr";
import { client } from "../utils/client";

export const fetcher: Fetcher<any, any> = (url: string) =>
  client.get(url).then((res: { data: any }) => res.data);

export const useFetch = (url: string) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePost = (url: string, request: any) => {
  return (url: string) =>
  client.post(url, request).then((res: { data: any }) => res.data);
};

export const useDelete = (url) => {
  return (url: string) =>
  client.delete(url).then((res: { data: any }) => res.data);
};