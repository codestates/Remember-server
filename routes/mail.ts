import * as controller from "../controllers/controller";
import express from "express";
const mailRouter = express.Router();

mailRouter.post("/mail", controller.mail.sendAuthController);
mailRouter.post("/mailreceipt", controller.mail.sendreceiptController);

export default mailRouter;
