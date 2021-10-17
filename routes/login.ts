import * as controller from "../controllers/controller";
import express from "express";
const loginRouter = express.Router();

loginRouter.post("/login", controller.login.loginController);
loginRouter.post("/signup", controller.signup.signupController);
loginRouter.get("/mypage", controller.mypage.getMypageController);
loginRouter.post("/mypage", controller.mypage.postMypageController);

export default loginRouter;
