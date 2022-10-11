import { NextFunction, Response, Router, Request } from "express";
import { getUserById, modifyUser } from "./controller";
import { updateUser } from "./operations/update";
import { generateInvitationLink, joinWaitingList } from "./operations/create";
const userRouter = Router();

userRouter.get(
  "/:userId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(getUserById(req.params.userId))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

userRouter.post("/invite", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(generateInvitationLink(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

userRouter.post("/subscribe", (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(joinWaitingList(req.body))
    .then((data) => res.json({ data }))
    .catch(next);
});

userRouter.put(
  "/:userId",
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(updateUser(req.params.userId, req.body))
      .then((data) => res.json({ data }))
      .catch(next);
  }
);

export default userRouter;
