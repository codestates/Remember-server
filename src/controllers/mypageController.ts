import { Request, Response } from "express";
import users from "../entity/users";
const jwt = require("jsonwebtoken");
const accessSecret = process.env.ACCESS_SECRET;

const mypageController = {
  mypageController: async (req: Request, res: Response) => {
    const authorization = req.headers["authorization"];

    if (!authorization) {
      res.status(400).send({ data: null, message: "invalid access token" });
    } else {
      const token = authorization.split(" ")[1];
      const data = jwt.verify(token, accessSecret, (err, decoded) => {
        if (err) {
          return err.message;
        } else {
          return decoded;
        }
      });

      const userInfo = await users.findOne({
        where: { email: data.email, name: data.name },
      });

      if (!userInfo) {
        res.status(400).send({ data: null, message: "access denied" });
      } else {
        res.status(200).json({ data: { userInfo }, message: "granted" });
      }
    }
  },
};
export default mypageController;
