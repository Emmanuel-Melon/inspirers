import { NextFunction, Response, Router, Request } from "express";
import { validation } from "../middleware/validation";
import { connectionRequest, establishConnection } from "./operations/create";
import {
  listConnections,
  listIncomingRequests,
  listOutgoingRequests,
  listRecommendations
} from "./operations/list";
import { validateRequest } from "./validation";
import { respondToRequest } from "./operations/update";
import { getConnectionById, getConnectionRequestById } from "./operations/read";
import { pushIntoEvents } from "../enqueue";
import { NotificationTrigger, NotificationChannel } from "@prisma/client";

const connectionsRouter = Router();

connectionsRouter.post(
  "/request",
  validation(validateRequest),
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(connectionRequest(req.body))
    .then(data => {
      pushIntoEvents({ 
        ...data,
        channel: NotificationChannel
      });
      return data;
    })
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

connectionsRouter.put(
  "/:requestId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(respondToRequest(req.params.requestId, req.body))
      .then((data) => establishConnection(data))
      .then(data => {
        pushIntoEvents({ 
          ...data,
          channel: NotificationChannel
        });
        return data;
      })
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

connectionsRouter.get(
  "/:userId/incoming",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(listIncomingRequests(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

connectionsRouter.get(
  "/:userId/outgoing",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(listOutgoingRequests(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

connectionsRouter.get(
  "/:userId/recommendations",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(listRecommendations(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

connectionsRouter.get(
  "/:userId/list",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(listConnections(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

connectionsRouter.get(
  "/:connectionId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getConnectionById(req.params.connectionId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

connectionsRouter.get(
  "/requests/:requestId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getConnectionRequestById(req.params.requestId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

export default connectionsRouter;
