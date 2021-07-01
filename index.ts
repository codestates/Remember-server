const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");

import { Request, Response, Application } from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";

//라우터
// import loginRouter from "./src/routes/login";
// import loginGithubRouter from "./src/routes/loginGithub";
// import loginGoogleRouter from "./src/routes/loginGoogle";
// import signUpRouter from "./src/routes/signUp";
// import mypageRouter from "./src/routes/mypage";

//db 연결
createConnection()
  .then(() => {
    console.log(`DB connected!`);
  })
  .catch((error) => console.log(error));

class App {
  public application: Application;
  constructor() {
    this.application = express();
  }
}
const app = new App().application;

const port = 80;
const ip = "127.0.0.1";
const server = http.createServer(app);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port);

app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

import loginController from "./src/controllers/loginController";
// import loginGithubController from "./src/controllers/loginGithubController";

//라우터
// app.use("/login", loginRouter);
// app.use("/github-login", loginGithubRouter);
// app.use("/google-login", loginGoogleRouter);
// app.use("/signup", signUpRouter);
// app.use("/mypage", mypageRouter);

app.post("/login", loginController.loginController);

app.get("/", (req: Request, res: Response) => {
  res.status(201).send("hello remember~");
});

module.exports = app;
