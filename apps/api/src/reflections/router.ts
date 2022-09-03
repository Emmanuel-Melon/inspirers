import { NextFunction, Response, Router, Request } from "express";
import { validation } from "../middleware/validation";
import { validateReflection } from "./validation";
import {
  create,
  deleteReflection,
  update,
  getAllReflections,
  getReflectionById,
} from "./operations";

const reflectionsRouter = Router();

reflectionsRouter.post(
  "/",
  validation(validateReflection),
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(create(req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

reflectionsRouter.put(
  "/:reflectionId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(update(req.params.reflectionId, req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

reflectionsRouter.get(
  "/:reflectionId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getReflectionById(req.params.reflectionId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

reflectionsRouter.delete(
  "/:reflectionId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(deleteReflection(req.params.reflectionId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

reflectionsRouter.get(
  "/user/:userId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getAllReflections(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

export default reflectionsRouter;
