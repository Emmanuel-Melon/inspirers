import * as express from "express";

import { UserObject } from "types/User";

export interface Request<B, Q, P> extends express.Request {
  body: B;
  query: Q;
  params: P;
  user?: UserObject;
}
