import { NextFunction, Response, Router } from "express";
import { addUser, getUserById } from "./controller";

const userRouter = Router();

userRouter.get("/", (req, res, next) => {
  return Promise.resolve(() => {})
    .then(data => res.json({ data }))
    .catch(next);
});

userRouter.get("/:userId", (req, res, next) => {
    return Promise.resolve(getUserById(parseInt(req.params.userId)))
    .then(data => res.json({ data }))
    .catch(next);
});

userRouter.post("/", (req, res, next) => {
  return Promise.resolve(addUser(req.body))
  .then(data => res.json({ data }))
  .catch(next);
});

userRouter.put("/", (req, res, next) => {
  return Promise.resolve(addUser(req.body))
  .then(data => res.json({ data }))
  .catch(next);
});

export default userRouter;