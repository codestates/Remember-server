import * as controller from "../controllers/controller";
import express from "express";
const landingpageRouter = express.Router();

landingpageRouter.get("/quiz", controller.quiz.quizController);
landingpageRouter.post("/today", controller.today.todayController);

export default landingpageRouter;
