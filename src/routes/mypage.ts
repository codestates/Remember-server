import * as express from "express";
const mypageRouter = express.Router();
import { Request, Response, Application } from "express";

import mypageController from "../controllers/mypageController";

mypageRouter.post("/mypage", (req: Request, res: Response) => {
  mypageController;
});
export default mypageRouter;
