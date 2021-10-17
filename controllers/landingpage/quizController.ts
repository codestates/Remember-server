import { Request, Response } from "express";
import { Quizzes } from "../../models/Quizzes";

const quizController = {
  quizController: async (req: Request, res: Response) => {
    const quiz = await Quizzes.findAll();
    res.status(200).send({ data: quiz });
  },
};

export default quizController;
