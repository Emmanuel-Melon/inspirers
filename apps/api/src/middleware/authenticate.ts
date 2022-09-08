import { NextFunction, Response } from "express";
import { sign, verify } from 'jsonwebtoken';

import { getUserById } from "../users/controller";

import { secret } from "../config";
import { handleError } from "../utils/errors";

export default function authenticate(
  req: any,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  const tokenInQuery = req.query.access_token;
  const tokenInHeader = req.header("Authorization") || "";
  const token = tokenInQuery || tokenInHeader.replace(/Bearer\s+/, "");
  // console.log(tokenInHeader);

  if (!token) {
    res.status(401).json({ message: "unauthorized" });
  }

  if (token) {
    // console.log(token);
    return Promise.resolve()
      .then(() => {
        const res = verify(token, secret, {
          algorithms: ["RS256"]
        });
        return res
      })
      .then((res) => {

      })
      .catch(e => {
        console.log(e);
        handleError(res, 401, "unauthorized");
      });
  }
}
