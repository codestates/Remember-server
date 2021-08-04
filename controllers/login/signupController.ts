import { Request, Response } from "express";
import { Users } from "../../models/Users";

const signupController = {
  signupController: async (req: Request, res: Response) => {
    const { email, password, name, mobile, dateOfBirth, url } = req.body;

    if (!email || !password || !name || !mobile || !dateOfBirth) {
      return res.status(422).send("please fill in all the blanks");
    } else {
      const emailCheck = await Users.findOne({
        where: { email: email },
      });
      //이미 사용중인 이메일인지 확인합니다
      if (emailCheck) {
        res.status(409).send("email exists");
      } else {
        Users.create({
          email: email,
          password: password,
          name: name,
          mobile: mobile,
          dateOfBirth: dateOfBirth,
          OAuth: false,
          url: url,
        });
        res.sendStatus(201);
      }
    }
  },
};
export default signupController;
