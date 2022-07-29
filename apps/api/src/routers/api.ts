import { Router } from "express";
import authenticate from "../middleware/authenticate";

import journeys from "../journeys/router";
import tasks from "../tasks/router";
import users from "../users/router";

const router = Router();

// router.use(authenticate);
router.use("/users", users);
router.use("/journeys", journeys);
router.use("/tasks", tasks);

export default router;
