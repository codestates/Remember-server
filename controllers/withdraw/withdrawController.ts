import { Request, Response } from "express";
import { Users } from "../../models/Users";

const withdrawController = {
  withdrawController: async (req: Request, res: Response) => {
    const { email } = req.body;
    await Users.destroy({
      where: { email: email },
    });
  },
};
export default withdrawController;
