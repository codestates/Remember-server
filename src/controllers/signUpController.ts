import { Request, Response } from "express";
import users from "../entity/users";

const signupController = {
  signupController: async (req: Request, res: Response) => {
    const { email, password, name, mobile, dateOfBirth } = req.body;

    if (!email || !password || !name || !mobile || !dateOfBirth) {
      return res.status(422).send("please fill in all the blanks");
    } else {
      const emailCheck = await users.findOne({
        where: { email: email },
      });
      //이미 사용중인 이메일인지 확인합니다
      if (emailCheck) {
        res.status(409).send("email exists");
      } else {
        users.create({
          email: email,
          password: password,
          name: name,
          mobile: mobile,
          dateOfBirth: dateOfBirth,
        });
        res.sendStatus(201);
      }
    }
  },
};
export default signupController;
