import { NextFunction, Response, Router, Request } from "express";
import { validation } from "../middleware/validation";
import { create } from "./operations/create";

export const createRoutine = (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(create(req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }