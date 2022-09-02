import { NextFunction, Response, Router, Request } from "express";
import {
  addBackpack,
  addResource,
  getResources,
  deleteResource,
  modifyResource
} from "./controller";

const backpackRouter = Router();

backpackRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(addBackpack(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

backpackRouter.get("/:backpackId", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(getResources(req.params.backpackId))
    .then((data) => res.json({ data }))
    .catch(next);
});

backpackRouter.post("/:backpackId", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(addResource(req.params.backpackId, req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

backpackRouter.delete("/resources/:resourceId", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(deleteResource(req.params.resourceId))
    .then((data) => res.json({ data }))
    .catch(next);
});

backpackRouter.put("/resources/:resourceId", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(modifyResource(req.params.resourceId, req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});



export default backpackRouter;
