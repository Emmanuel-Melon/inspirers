import { NextFunction, Response, Router } from "express";
import { Request } from "../express";
import { IdInObject } from "../id";
import { addJourney, getUserJourneys, getJourneyById, updateJourney } from "./controller";

const journeyRouter = Router();

journeyRouter.get("/:userId/list",
  (
    req: Request<any, any, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
  return Promise.resolve(getUserJourneys(req.params.userId))
    .then(data => res.json({ data }))
    .catch(next);
});

journeyRouter.get("/:journeyId",
  (
    req: Request<any, any, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
  return Promise.resolve(getJourneyById(req.params.journeyId))
    .then(data => res.json({ data }))
    .catch(next);
});

journeyRouter.put("/:journeyId",
  (
    req: Request<any, any, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
  return Promise.resolve(updateJourney(req.params.journeyId, req.body))
    .then(data => res.json({ data }))
    .catch(next);
});

journeyRouter.post("/",
  (
    req: Request<any, any, IdInObject>,
    res: Response,
    next: NextFunction
  ) => {
  return Promise.resolve(addJourney(req.body))
    .then(data => res.json({ data }))
    .catch(next);
});



export default journeyRouter;