import { NextFunction, Response, Router, Request } from "express";
import { createUser, loginUser } from "./controller";

const authRouter = Router();

authRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(createUser(req.body))
    .then((data) => {
      /**
     * res.setHeader(
      'Set-Cookie',
      cookie.serialize('TRAX_ACCESS_TOKEN', data.token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    );
     */
      res.json({ data });
    })
    .catch(next);
});

authRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(loginUser(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

export default authRouter;
