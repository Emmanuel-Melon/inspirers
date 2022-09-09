import { NextFunction, Response, Router, Request } from "express";
import {
  listNotifications,
} from "./operations/list";


const notificationsRouter = Router();


notificationsRouter.get(
  "/:userId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(listNotifications(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

notificationsRouter.put(
  "/:notificationId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(listNotifications(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);





export default notificationsRouter;
