import { Router } from "express";

import journeys from "../journeys/router";
import tasks from "../tasks/router";
import users from "../users/router";

const router = Router();


router.use("/journeys", journeys);
router.use("/tasks", tasks);
router.use("/users", users);

export default router;