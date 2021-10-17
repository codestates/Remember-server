import * as controller from "../controllers/controller";
import express from "express";
const mainpageRouter = express.Router();

mainpageRouter.get("/mainpage", controller.mainpage.mainpageController);
mainpageRouter.post(
  "/mainpage",
  controller.mainpage.mainpageDonationController
);
mainpageRouter.get(
  "/mainpage/:id",
  controller.mainpage.mainpageSingleController
);
mainpageRouter.post("/payment", controller.payment.paymentController);

export default mainpageRouter;
