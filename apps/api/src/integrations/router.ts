import { NextFunction, Response, Router, Request } from "express";
import { listIntegrations } from "./operations/list";


const integrationsRouter = Router();

integrationsRouter.get(
  "/:userId/list",
  (req: Request<any, any, any>, res: Response, next: NextFunction) => {
    return Promise.resolve(listIntegrations(req.params.userId))
      .then((data) => {
        return res.json({ data });
      })
      .catch(next);
  }
);



export default integrationsRouter;
