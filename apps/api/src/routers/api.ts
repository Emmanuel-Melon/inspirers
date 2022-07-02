import { Router } from "express";

import tasks from "../tasks/router";
import users from "../users/router";

const router = Router();

router.use("/tasks", tasks);
router.use("/users", users);

export default router;