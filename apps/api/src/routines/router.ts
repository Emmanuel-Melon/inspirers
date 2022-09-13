import { Router } from "express";
import { createRoutine, listRoutines, getRoutineById, updateRoutine } from "./controller";

const routinesRouter = Router();

routinesRouter.post("/", createRoutine);

routinesRouter.put("/:routineId", updateRoutine);

routinesRouter.get("/:userId/list", listRoutines);

routinesRouter.get("/:routineId", getRoutineById);

export default routinesRouter;
