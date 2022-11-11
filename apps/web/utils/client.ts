import axios from "axios";
import { useSession, signIn, getSession } from "next-auth/react";
import { encode } from "next-auth/jwt";

import { backendUrl } from "../config";

console.log("backendUrl", backendUrl);

function httpClient(baseURL: string) {
  const client = axios.create({ baseURL });
  client.interceptors.request.use(async (request) => {
    const session = await getSession();
    console.log(session?.jwt, "session");
    return {
      ...request,
      headers: {
        ...request.headers,
        // Authorization: `Bearer ${session?.accessToken}`
      },
    };
  });

  return client;
}

export const client = httpClient(backendUrl);
