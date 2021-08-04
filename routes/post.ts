import * as controller from "../controllers/controller";
import express from "express";
const postRouter = express.Router();

postRouter.post("/comment", controller.comment.commentController);
postRouter.get("/comment-list", controller.comment.commentListController);
postRouter.put("/put-like", controller.like.putLikeController);
postRouter.post("/post-like", controller.like.postLikeController);

export default postRouter;
