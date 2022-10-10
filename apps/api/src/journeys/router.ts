import { NextFunction, Response, Router, Request } from "express";
// import { Request } from "../express";
import { Goal } from "@prisma/client";
import { IdInObject } from "./id";
import {
  getUserJourneys,
  getJourneyById,
  updateJourney,
  addBlueprint,
  getBlueprints,
  updateBlueprint,
  deleteBlueprint,
  deleteJourney,
} from "./controller";

import { createGoal, createJourney } from "./operations/create";
import { listGoals } from "./operations/list";

const journeyRouter = Router();

journeyRouter.get(
  "/blueprints",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(getBlueprints())
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.get(
  "/:userId/list",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(getUserJourneys(req.params.userId))
      .then((data) => {
        console.log(data);
        return res.json({ data });
      })
      .catch(next);
  }
);

journeyRouter.get(
  "/:journeyId",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(getJourneyById(req.params.journeyId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.get(
  "/:journeyId/goals/recommendations",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(getJourneyById(req.params.journeyId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.get(
  "/:journeyId/routines/recommendations",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(getJourneyById(req.params.journeyId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.get(
  "/:journeyId/goals",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(listGoals(req.params.journeyId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.get(
  "/:journeyId/goals/:goalId",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(getJourneyById(req.params.journeyId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.post(
  "/:journeyId/goals",
  (req: Request<any, IdInObject, Goal>, res: Response, next: NextFunction) => {
    return Promise.resolve(createGoal(req.params.journeyId, req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.put(
  "/:journeyId/goals/:goalId",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(getJourneyById(req.params.journeyId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.put(
  "/:journeyId",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(updateJourney(req.params.journeyId, req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.put(
  "/blueprints/:blueprintId",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(updateBlueprint(req.params.blueprintId, req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(createJourney(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

journeyRouter.post(
  "/blueprint",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(addBlueprint(req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.delete(
  "/blueprints/:blueprintId",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(deleteBlueprint(req.params.blueprintId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

journeyRouter.delete(
  "/:journeyId",
  (req: Request<any, any, IdInObject>, res: Response, next: NextFunction) => {
    return Promise.resolve(deleteJourney(req.params.journeyId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

export default journeyRouter;
