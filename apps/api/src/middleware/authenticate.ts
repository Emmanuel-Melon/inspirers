import { NextFunction, Response } from "express";
import * as jwt from "jsonwebtoken";

import { getUserById } from "../users/controller";

import { secret } from "../config";
import { Request } from "../express";
import { handleError } from "../utils/errors";

export default function authenticate(
  req: Request<any, any, any>,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  const tokenInQuery = req.query.access_token;
  const tokenInHeader = req.header("Authorization") || "";
  const token = tokenInQuery || tokenInHeader.replace(/Bearer\s+/, "");

  if (!token) {
    console.log('hey');
    res.status(401).json({ message: "unauthorized"});
  }

  if(token) {
    return Promise.resolve()
    .then(() => jwt.verify(token, secret) as { id: string })
    .then(({ id }) => {
      return getUserById(id).then(user => {
        req.user = user;
        return next();
      });
    })
    .catch(
      handleError(res, 401, "Your session has expired")
    );
  }
}
