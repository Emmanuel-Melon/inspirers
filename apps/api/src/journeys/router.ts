import { NextFunction, Response, Router } from "express";
import { Request } from "../express";

const router = Router();

router.get("/:userId",
  (
    req: Request<void, void, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
  return Promise.resolve(listJourneys(req.params.userId))
    .then(data => res.json({ data }))
    .catch(next);
});

router.get("/:id/list",
  (
    req: Request<void, void, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
  return Promise.resolve(findById(req.params.id))
    .then(data => res.json({ data }))
    .catch(next);
});

router.get("/:id/timeline",
  (
    req: Request<void, void, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
    return Promise.resolve(populateTimeline(req.params.id))
    .then(data => res.json({ data }))
    .catch(next);
});

router.get("/:id/events",
  (
    req: Request<void, void, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
    return Promise.resolve(listEvents(req.params.id))
    .then(data => res.json({ data }))
    .catch(next);
});

router.get("/:id/activities",
  (
    req: Request<void, void, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
    return Promise.resolve(listActivities(req.params.id))
    .then(data => res.json({ data }))
    .catch(next);
});

router.post("/",
  (
    req: Request<any, any, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
  return Promise.resolve(createJourney(req.body, req.user))
    .then(data => res.json({ data }))
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  return Promise.resolve(editJourney(req.body, req.params.id))
    .then(data => res.json({ data }))
    .catch(next);
});

export default router;