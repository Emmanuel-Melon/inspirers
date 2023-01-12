import axios from "axios";
import { useSession, signIn, getSession } from "next-auth/react";
import { encode, getToken } from "next-auth/jwt";

import { backendUrl } from "../config";

function httpClient(baseURL: string) {
  const client = axios.create({ baseURL });
  client.interceptors.request.use(async (request) => {
    const session = await getSession();
    // console.log(session, "session!");
    // console.log(session?.jwt, "jwt");
    return {
      ...request,
      headers: {
        ...request.headers,
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsYTZ6eHp4eTA5ODY5NGJ0aXF3bWFpeGQiLCJuYW1lIjoiRW1tYW51ZWwgR2F0d2VjaCIsInVzZXJuYW1lIjpudWxsLCJpbWFnZSI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMTAxNTIwND92PTQiLCJlbWFpbCI6ImVtbWFudWVsZ2F0d2VjaEBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIyLTExLTA3VDE2OjI3OjE5LjIyM1oiLCJiaW8iOm51bGwsInBhc3N3b3JkIjoiJDJiJDEwJDdORklpQ1Q2Lll6dFFlM3ExWkNCZnU4TG5nbndRbnRzc1pWa3IvdWJNWGhNTEw1S1dKSE4uIiwiZW1haWxWZXJpZmllZCI6bnVsbCwibG9naW4iOm51bGwsImlkZW50aXR5UHJvdmlkZXIiOiJHSVRIVUIiLCJpZGVudGl0eVByb3ZpZGVySWQiOm51bGwsImpvdXJuZXlMaW1pdCI6MSwibG9jYXRpb24iOm51bGwsIm9jY3VwYXRpb24iOm51bGwsInRpbWVab25lIjoiRXVyb3BlL0xvbmRvbiIsIndlZWtTdGFydCI6IlN1bmRheSIsImRheVN0YXJ0IjoiMDg6MDAiLCJkYXlFbmQiOiIxNzowMCIsImNvbXBsZXRlZE9uYm9hcmRpbmciOmZhbHNlLCJ0aW1lRm9ybWF0IjoxMiwiaWF0IjoxNjczMzkzNDgwfQ.JP-NYB7CgIRqo8hfTWg7fUwG6iAiIarG5wT7xzvxwdc`
      },
    };
  });

  return client;
}

export const client = httpClient(backendUrl);
