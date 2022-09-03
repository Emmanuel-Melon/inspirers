import { Router } from "express";
import authenticate from "../middleware/authenticate";

import journeys from "../journeys/router";
import tasks from "../tasks/router";
import users from "../users/router";
import backpacks from  "../backpacks/router";
import reflections from "../reflections/router";

const router = Router();

// router.use(authenticate);
router.use("/backpacks", backpacks);
router.use("/users", users);
router.use("/journeys", journeys);
router.use("/reflections", reflections);
router.use("/tasks", tasks);

export default router;
