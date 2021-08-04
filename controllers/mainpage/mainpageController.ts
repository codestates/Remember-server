import { Request, Response } from "express";
import { MainPosts } from "../../models/MainPosts";
import { Donors } from "../../models/Donors";

const mainpageController = {
  mainpageController: async (req: Request, res: Response) => {
    const posts = await MainPosts.findAll();

    res.status(200).send({ data: posts });
  },

  mainpageSingleController: async (req: Request, res: Response) => {
    const post = await MainPosts.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(200).send({ data: post });
  },

  mainpageDonationController: async (req: Request, res: Response) => {
    const { title } = req.body;
    const totalAmount = await Donors.sum("donationAmount", {
      where: { mainPost_title: title },
    });
    const percentage = Math.floor((+`${totalAmount}` / 1000000) * 100);
    res.status(200).send({ data: { percentage, totalAmount } });
  },
};

export default mainpageController;
