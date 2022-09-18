import { NextFunction, Response, Router, Request } from "express";
import {
  addTask,
  getTaskById,
  modifyTask,
  getUserTasks,
  removeTask,
} from "./controller";

const tasksRouter = Router();

tasksRouter.get(
  "/:taskId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getTaskById(req.params.taskId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

tasksRouter.get(
  "/:userId/list",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getUserTasks(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

tasksRouter.delete(
  "/:taskId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(removeTask(req.params.taskId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

tasksRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(addTask(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

tasksRouter.put(
  "/:taskId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(modifyTask(req.params.taskId, req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

export default tasksRouter;
