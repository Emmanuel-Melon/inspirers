import { NextFunction, Response, Router, Request } from "express";
import { addTask, getTaskById, modifyTask, getUserTasks, removeTask } from "./controller";

const tasksRouter = Router();

tasksRouter.get("/:taskId", (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getTaskById(parseInt(req.params.taskId)))
    .then(data => res.json({ data }))
    .catch(next);
});

tasksRouter.get("/user/:userId", (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getUserTasks(parseInt(req.params.taskId)))
    .then(data => res.json({ data }))
    .catch(next);
});

tasksRouter.delete("/:taskId", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(removeTask(parseInt(req.params.taskId)))
  .then(data => res.json({ data }))
  .catch(next);
});

tasksRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(addTask(req.body))
  .then(data => res.json({ data }))
  .catch(next);
});

tasksRouter.put("/:taskId", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(modifyTask(parseInt(req.params.taskId), req.body))
  .then(data => res.json({ data }))
  .catch(next);
});

export default tasksRouter;