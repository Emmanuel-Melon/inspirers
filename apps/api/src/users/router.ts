import { NextFunction, Response, Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res, next) => {
  return Promise.resolve(() => {})
    .then(data => res.json({ data }))
    .catch(next);
});

userRouter.post("/", (req, res, next) => {
    return Promise.resolve(() => {})
    .then(data => res.json({ data }))
    .catch(next);
});

export default userRouter;