//오아스로 로그인 할 때 정보들 테이블에 정보
import { Request, Response } from "express";
import { Users } from "../../models/Users";
const OAuthInfoController = {
  OAuthInfoController: async (req: Request, res: Response) => {
    console.log(req.body);

    const email = req.body.email;
    const name = req.body.name;
    const url = req.body.url;

    const userInfo = await Users.findOne({
      where: { email: email },
    });

    if (!userInfo) {
      await Users.create({
        name: name,
        email: email,
        password: null,
        mobile: null,
        dateOfBirth: null,
        OAuth: true,
        url: url,
      });
    } else {
      console.log("welcome");
    }
  },
};
export default OAuthInfoController;
