import { Router } from "express";
import { 
    createRoutine, 
    listRoutines, 
    getRoutineById, 
    updateRoutine, 
    deleteRoutine, 
    addRoutineItem,
    deleteRoutineItem 
} from "./controller";

const routinesRouter = Router();

routinesRouter.post("/", createRoutine);

routinesRouter.post("/:routineId", addRoutineItem);

routinesRouter.put("/:routineId", updateRoutine);

routinesRouter.get("/:userId/list", listRoutines);

routinesRouter.get("/:routineId", getRoutineById);

routinesRouter.delete("/:routineId", deleteRoutine);

routinesRouter.delete("/:routineId/:objectiveId", deleteRoutineItem );

export default routinesRouter;
