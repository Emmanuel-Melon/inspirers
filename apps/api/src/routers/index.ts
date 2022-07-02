import * as express from "express";

import api from "./api";
import auth from "../auth/router";

const router = express.Router();

router.use("/auth", auth);
router.use("/api", api);

export default router;
