import { NextFunction, Response, Router, Request } from "express";
import {
  addBackpack,
} from "./controller";

const backpackRouter = Router();

backpackRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(addBackpack(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});


export default backpackRouter;
