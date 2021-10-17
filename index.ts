import express from "express";
import cors from "cors";
import "dotenv/config";

// route 적용
import landingpageRouter from "./routes/landingpage";
import loginRouter from "./routes/login";
import mailRouter from "./routes/mail";
import mainpageRouter from "./routes/mainpage";
import postRouter from "./routes/post";
import userInfoRouter from "./routes/userInfo";
import withdrawRouter from "./routes/withdraw";

const bodyParser = require("body-parser");

const http = require("http");
const PORT = process.env.DATABASE_PORT;
const cookieParser = require("cookie-parser");

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;
app.use(bodyParser.json());
const port = 80;
const ip = "127.0.0.1";
const server = http.createServer(app);
server.listen(port);
const corsOption = {
  Headers: { "content-type": "application/json" },
  origin: true,
  method: ["post", "get", "delete", "options", "put"],
  credentials: true,
  preflightContinue: true,
};

app.use((req, res, next) => {
  next();
}, cors(corsOption));
app.options(
  "*",
  (req, res, next) => {
    next();
  },
  cors(corsOption)
);

// route 적용
app.use("/", landingpageRouter);
app.use("/", loginRouter);
app.use("/", mailRouter);
app.use("/", mainpageRouter);
app.use("/", postRouter);
app.use("/", userInfoRouter);
app.use("/", withdrawRouter);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOption));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("hehe");
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
