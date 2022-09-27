import { NextFunction, Response, Router, Request } from "express";

const integrationsRouter = Router();

integrationsRouter.get(
  "/:userId/list",
  (req: Request<any, any, any>, res: Response, next: NextFunction) => {
    return Promise.resolve(getUserJourneys(req.params.userId))
      .then((data) => {
        console.log(data);
        return res.json({ data });
      })
      .catch(next);
  }
);



export default integrationsRouter;
