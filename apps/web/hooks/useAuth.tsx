import useSWR from "swr";
import { useFetch } from "./useSwr";

export const useMe = () => {
  const { data, error } = useSWR("/me", useFetch);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};
