import { Request, Response } from "express";
import { Likes } from "../../models/Likes";

const likeController = {
  putLikeController: async (req: Request, res: Response) => {
    const { name, title } = req.body;
    if (name === undefined || name === null) {
      console.log("please login");
    } else {
      const userInfo = await Likes.findOne({
        where: { user_name: name, post_title: title },
      });
      if (!userInfo) {
        await Likes.create({
          user_id: null,
          user_name: name,
          mainPost_id: null,
          post_title: title,
          likeStatus: true,
        });
      } else {
        const userStatus = await Likes.findOne({
          where: { user_name: name, post_title: title },
        });
        if (!userStatus!.likeStatus) {
          await Likes.update(
            {
              likeStatus: true,
            },
            { where: { user_name: name, post_title: title } }
          );
        } else {
          await Likes.update(
            {
              likeStatus: false,
            },
            { where: { user_name: name, post_title: title } }
          );
        }
      }
    }
  },
  postLikeController: async (req: Request, res: Response) => {
    const { title } = req.body;
    const likeTable = await Likes.findAll({
      where: { post_title: title, likeStatus: true },
    });
    res.status(200).send({ data: { likeTable } });
  },
};

export default likeController;
