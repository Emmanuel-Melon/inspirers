import { NextFunction, Response, Router, Request } from "express";
import { validation } from "../middleware/validation";
import { create, addObjective } from "./operations/create";
import { list } from "./operations/list";
import { update, updateObjective } from "./operations/update";
import { getById } from "./operations/getById";
import { deleteById, removeObjective } from "./operations/delete";

export const createRoutine = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Promise.resolve(create({ ...req.body }))
    .then((data) => res.json({ data }))
    .catch(next);
};

export const addRoutineItem = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Promise.resolve(addObjective(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
};

export const deleteRoutineItem = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Promise.resolve(removeObjective(req.params.objectiveId))
    .then((data) => res.json({ data }))
    .catch(next);
};

export const updateRoutineItem = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Promise.resolve(updateObjective(req.params.objectiveId, req.body))
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

export const deleteRoutine = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Promise.resolve(deleteById(req.params.routineId))
    .then((data) => res.json({ data }))
    .catch(next);
};