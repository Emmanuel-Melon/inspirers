import { Router } from "express";
import { createRoutine, listRoutines, getRoutineById, updateRoutine, deleteRoutine } from "./controller";

const routinesRouter = Router();

routinesRouter.post("/", createRoutine);

routinesRouter.put("/:routineId", updateRoutine);

routinesRouter.get("/:userId/list", listRoutines);

routinesRouter.get("/:routineId", getRoutineById);

routinesRouter.delete("/:routineId", deleteRoutine);

export default routinesRouter;
