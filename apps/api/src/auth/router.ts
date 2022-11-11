import { NextFunction, Response, Router, Request } from "express";
import { signup, login } from "./controller";

const authRouter = Router();

authRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(signup(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

authRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(login(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

export default authRouter;
