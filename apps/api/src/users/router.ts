import { NextFunction, Response, Router, Request } from "express";
import { addUser, getUserById, modifyUser } from "./controller";

const userRouter = Router();

userRouter.get("/:userId", (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getUserById(parseInt(req.params.userId)))
    .then(data => res.json({ data }))
    .catch(next);
});

userRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(addUser(req.body))
  .then(data => res.json({ data }))
  .catch(next);
});

userRouter.put("/:userId", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(modifyUser(parseInt(req.params.userId), req.body))
  .then(data => res.json({ data }))
  .catch(next);
});

export default userRouter;