import { Request, Response } from "express";
import { Users } from "../../models/Users";
import { Donors } from "../../models/Donors";
const jwt = require("jsonwebtoken");
const accessSecret = process.env.ACCESS_SECRET;

const mypageController = {
  postMypageController: async (req: Request, res: Response) => {
    //Mypage 소셜 로그인
    const { email, name } = req.body;
    const userInfo = await Users.findOne({
      where: { email: email, name: name },
    });
    const donorInfo = await Donors.findAll({
      where: { user_name: userInfo!.name, user_email: userInfo!.email }, //deploy error
    });

    if (!userInfo) {
      res.status(400).send({ data: null, message: "access denied" });
    } else {
      res
        .status(200)
        .json({ data: { userInfo, donorInfo }, message: "granted" }); // 유저 정보와 후원 내역 정보 보내드림.
    }
  },
  getMypageController: async (req: Request, res: Response) => {
    //Mypage 일반 로그인
    const authorization = req.headers["authorization"];
    if (!authorization) {
      res.status(400).send({ data: null, message: "invalid access token" });
    } else {
      const token = authorization.split(" ")[1];
      const data = jwt.verify(token, accessSecret, (err: any, decoded: any) => {
        //deploy error
        if (err) {
          return err.message;
        } else {
          return decoded;
        }
      });

      const userInfo = await Users.findOne({
        where: { email: data.email, name: data.name },
      });

      const donorInfo = await Donors.findAll({
        where: { user_name: userInfo!.name, user_email: userInfo!.email }, //deploy error
      });

      if (!userInfo) {
        res.status(400).send({ data: null, message: "access denied" });
      } else {
        res
          .status(200)
          .json({ data: { userInfo, donorInfo }, message: "granted" }); // 유저 정보와 후원 내역 정보 보내드림.
      }
    }
  },
};
export default mypageController;
