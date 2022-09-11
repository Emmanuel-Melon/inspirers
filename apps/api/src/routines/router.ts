import { NextFunction, Response, Router, Request } from "express";
import { validation } from "../middleware/validation";
import { create } from "./operations/create";
import { createRoutine } from "./controller";

const routinesRouter = Router();

routinesRouter.post(
  "/",
  createRoutine
);

export default routinesRouter;
