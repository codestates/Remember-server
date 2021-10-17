import { Request, Response } from "express";
import { Users } from "../../models/Users";
require("dotenv").config();
const jwt = require("jsonwebtoken");
const accessSecret = process.env.ACCESS_SECRET;
const refreshSecret = process.env.REFRESH_SECRET;

const loginController = {
  loginController: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userInfo = await Users.findOne({
      where: { email: email, password: password },
    });
    if (!userInfo) {
      res
        .status(403)
        .send({ data: null, message: "please check your email / password" });
    } else {
      //데이터 안 받아와지면, userInfo.dataValues 이걸로
      const { email, name } = userInfo;
      const info = {
        email: email,
        name: name,
      };
      const authorization = req.headers["authorization"];
      //만약 로그아웃을 하고 로그인을 하는 경우라면 token 생성이 되어 있으므로 토큰을 재생성할 필요가 없다.
      //그래서 아래 코드에서 존재할 경우와 존재하지 않을 경우를 나눠놓았습니다.
      if (!authorization) {
        const accessToken = jwt.sign(info, accessSecret);
        const refreshToken = jwt.sign(info, refreshSecret);

        res.cookie("refreshToken", refreshToken, {
          domain: "localhost",
          path: "/",
          maxAge: 24 * 6 * 60 * 10000,
          sameSite: "none",
          httpOnly: true,
          secure: true,
          //   credential: true,
        });

        res
          .status(200)
          .json({ data: { accessToken: accessToken }, message: "granted" });
      } else {
        res.status(200);
      }
    }
  },
};
export default loginController;
