import { NextFunction, Response, Router, Request } from "express";
import { validation } from "../middleware/validation";
import { create } from "./operations/create";
import { list } from "./operations/list";
import { update } from "./operations/update";
import { getById } from "./operations/getById";

export const createRoutine = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Promise.resolve(create(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
};

export const updateRoutine = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return Promise.resolve(update(req.params.routineId, req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  };

export const listRoutines = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Promise.resolve(list(req.params.userId))
    .then((data) => res.json({ data }))
    .catch(next);
};

export const getRoutineById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Promise.resolve(getById(req.params.routineId))
    .then((data) => res.json({ data }))
    .catch(next);
};
