import * as controller from "../controllers/controller";
import express from "express";
const userInfoRouter = express.Router();

userInfoRouter.post("/oauth-info", controller.OAuthInfo.OAuthInfoController); //api 추가하기
userInfoRouter.put("/update-user", controller.updateUser.updateUserController);

export default userInfoRouter;
