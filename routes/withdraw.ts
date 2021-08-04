import * as controller from "../controllers/controller";
import express from "express";
const withdrawRouter = express.Router();

withdrawRouter.post("/withdraw", controller.withdraw.withdrawController);

export default withdrawRouter;
