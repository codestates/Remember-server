import { Request, Response } from "express";
import { Comments } from "../../models/Comments";

const commentController = {
  commentController: async (req: Request, res: Response) => {
    const { name, comment, title, url } = req.body;
    if (name === undefined || name === null) {
      console.log("please login");
    } else {
      await Comments.create({
        user_id: null,
        user_name: name,
        mainPost_id: null,
        post_title: title,
        comment: comment,
        url: url,
      });
    }
  },

  commentListController: async (req: Request, res: Response) => {
    const commentInfo = await Comments.findAll();
    res.status(200).send({ data: commentInfo });
  },
};

export default commentController;
