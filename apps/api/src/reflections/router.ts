import { NextFunction, Response, Router, Request } from "express";


import {
  addReflection,
  getReflections
} from "./controller";

const reflectionsRouter = Router();

reflectionsRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(addReflection(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

reflectionsRouter.get("/:userId", (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getReflections(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  });


export default reflectionsRouter;
