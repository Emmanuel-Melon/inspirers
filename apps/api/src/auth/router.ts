import { NextFunction, Response, Router } from "express";

const router = Router();

router.post("/create", (req, res, next) => {
  return Promise.resolve(() => {})
    .then(data => res.json({ data }))
    .catch(next);
});

router.post("/login", (req, res, next) => {
    return Promise.resolve(() => {})
    .then(data => res.json({ data }))
    .catch(next);
});

export default router;