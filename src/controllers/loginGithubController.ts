require("dotenv").config();
import { Request, Response } from "express";

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require("axios");
// db테이블 가져오기
import users from "../entity/users";

const loginGithubController = {
  loginGithubController: async (req: Request, res: Response) => {
    console.log(req.body);
    let auth = req.body.authorizationCode;

    await axios
      .post(
        "https://github.com/login/oauth/access_token",
        {
          client_id: clientID,
          client_secret: clientSecret,
          code: auth,
        },
        {
          headers: { accept: "application/json" },
        }
      )
      .then(async (response: any) => {
        const accessToken = response.data.access_token;
        //   const refreshToken = response.data.refresh_token;
        await axios
          .get("https://api.github.com/user", {
            headers: { authorization: `token ${accessToken}` },
          })
          .then(async (response: any) => {
            const result = await users.findOne({
              email: response.data.email,
            });
            if (result) {
              res.status(200).send({ data: result });
              res.send({ accessToken: accessToken });
              // cookie에 refresh token 저장
              // res.cookie("refreshToken", refreshToken, {
              //   maxAge: 1000 * 60 * 60 * 24 * 7,
              //   httpOnly: true,
              //   secure: true,
              //   sameSite: "none",
              // });
            } else {
              await users.create({
                name: response.data.name,
                email: response.data.email,
              });
              res.status(200).send({ data: result });
              res.send({ accessToken: accessToken });
              // cookie에 refresh token 저장
              // res.cookie("refreshToken", refreshToken, {
              //   maxAge: 1000 * 60 * 60 * 24 * 7,
              //   httpOnly: true,
              //   secure: true,
              //   sameSite: "none",
              // });
            }
          });
      });
  },
};
export default loginGithubController;
