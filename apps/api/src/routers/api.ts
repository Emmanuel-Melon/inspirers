import { Router } from "express";
import authenticate from "../middleware/authenticate";

import connections from  "../connections/router";
import backpacks from  "../backpacks/router";
import journeys from "../journeys/router";
import notifications from "../notifications/router";
import reflections from "../reflections/router";
import routines from "../routines/router";
import tasks from "../tasks/router";
import users from "../users/router";

const router = Router();

// router.use(authenticate);
router.use("/backpacks", backpacks);
router.use("/connections", connections);
router.use("/journeys", journeys);
router.use("/notifications", notifications);
router.use("/reflections", reflections);
router.use("/routines", routines);
router.use("/tasks", tasks);
router.use("/users", users);

export default router;
