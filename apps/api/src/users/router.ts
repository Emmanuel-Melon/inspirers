import { NextFunction, Response, Router, Request } from "express";
import { addUser, getUserById, modifyUser, loginUser } from "./controller";
import * as cookie from 'cookie';

const userRouter = Router();

userRouter.get("/:userId", (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getUserById(req.params.userId))
    .then(data => res.json({ data }))
    .catch(next);
});

userRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(addUser(req.body))
  .then(data => {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('TRAX_ACCESS_TOKEN', data.token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    );
    res.json({ data });
  })
  .catch(next);
});

userRouter.put("/:userId", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(modifyUser(req.params.userId, req.body))
  .then(data => res.json({ data }))
  .catch(next);
});

userRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(loginUser(req.body))
  .then(data => res.json({ data }))
  .catch(next);
});

export default userRouter;