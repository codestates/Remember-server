import { Request, Response } from "express";
require("dotenv").config();
const nodemailer = require("nodemailer");

const nodemailerController = {
  sendAuthController: async (req: Request, res: Response) => {
    const { email } = req.body;

    let authenNum = Math.floor(Math.random() * 1000000) + 100000;
    if (authenNum > 1000000) {
      authenNum = authenNum - 100000;
    }

    const mail = nodemailer.createTransport({
      //메일트랩
      service: "gmail",
      host: "smtp.gmail.com",
      port: 2525,
      secure: false,
      auth: {
        user: process.env.service_email,
        pass: process.env.service_pass,
      },
    });

    const content = await mail.sendMail({
      from: "Remember-service@gmail.com",
      to: `${email}`,
      subject: "Login to Remember",
      html: `
      <style>

      </style>
        <p style="text-align: center;"><span style="font-size: 36px;"><strong>Remember</strong></span></p>
        <hr>
        <p style="text-align: center;">Welcome to Remember</p>
        <p style="text-align: left;"><span style="font-size: 20px;">이메일 인증 코드</span></p>
        <p><span style='color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, "Apple SD Gothic Neo", helvetica, "나눔바른고딕 옛한글", "NanumBarunGothic YetHangul", sans-serif; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>잊지 말아야 할 일들 그리고 잊혀가는 일들을 단순히 후원 한 번에 그치지 않고, 잊히지 않게 하기 위한 서비스,</span></p>
        <p style="text-align: left; line-height: 1;"><span style='color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'><strong>Remember</strong></span><span style='color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>&nbsp;가입하신 것을 환영합니다.</span></p>
        <p style="text-align: left; line-height: 1;"><span style='color: rgb(0, 0, 0); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; font-size: 13px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;'>아래의 인증코드를 입력하시면 가입이 정상적으로 완료됩니다.</span></p>
        <main style="text-align: left; line-height: 1;"><br></main>
        <p><span style="font-size: 36px; background-color: rgb(209, 213, 216);">${authenNum}</span></p>
        <p><br></p>
        <p style="text-align: left; line-height: 1;">
          <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><span style="font-size: 13px; background-color: rgb(255, 255, 255);">리멤버는 어떻게 개발되었는지 궁금하시다면?</span></font>
        </p>
        <p style="text-align: left; line-height: 1;">
          <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><span style="font-size: 13px; background-color: rgb(255, 255, 255);">아래 링크를 참고해주세요!</span></font>
        </p>
        <ul>
          <li style="text-align: left; line-height: 1;">
              <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><a href="https://github.com/codestates/Remember-client", style="font-size: 13px; background-color: rgb(255, 255, 255); cursor: pointer;">Remember Client</a></font>
          </li>
          <li style="text-align: left; line-height: 1;">
              <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><a href="https://github.com/codestates/Remember-server", style="font-size: 13px; background-color: rgb(255, 255, 255); cursor: pointer;">Remember Server</a></font>
          </li>
        </ul>
        <p>
            <font face="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"><span style="font-size: 13px; background-color: rgb(255, 255, 255);"><br></span></font>
        </p>
        <hr>
        <p><span style="font-size: 10px;">본 메일은 발신전용이며, 문의에 대한 회신은 처리되지 않습니다. 추가로 리멤버 서비스에 궁금하신 점이나 불편한 사항은 위 링크를 들어가 연락주시면 도움드리겠습니다.</span></p>
      `,
    });

    res.status(200).send({ data: authenNum });
  },

  sendreceiptController: async (req: Request, res: Response) => {
    const { name, email, title, amount } = req.body;

    const today = String(new Date()).slice(0, 15);
    const random = Math.floor(Math.random() * 100);

    const mail = nodemailer.createTransport({
      //메일트랩
      service: "gmail",
      host: "smtp.gmail.com",
      port: 2525,
      secure: false,
      auth: {
        user: process.env.service_email,
        pass: process.env.service_pass,
      },
    });

    const content = await mail.sendMail({
      from: "Remember-service@gmail.com",
      to: `${email}`,
      subject: `[Remember] ${name}후원자님, 요청하신 증명서를 보내드립니다.`,
      html: `
      <head>
          <meta charset="utf-8">
          <title>A simple, clean, and responsive HTML ******* template</title>
          <style>
              .invoice-box {
                  max-width: 800px;
                  margin: auto;
                  padding: 30px;
                  border: 1px solid #eee;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                  font-size: 16px;
                  line-height: 24px;
                  font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                  color: #555;
              }

              .invoice-box table {
                  width: 100%;
                  line-height: inherit;
                  text-align: left;
              }

              .invoice-box table td {
                  padding: 5px;
                  vertical-align: top;
              }

              .invoice-box table tr td:nth-child(2) {
                  text-align: right;
              }

              .invoice-box table tr.top table td {
                  padding-bottom: 20px;
              }

              .invoice-box table tr.top table td.title {
                  font-size: 45px;
                  line-height: 45px;
                  color: #333;
              }

              .invoice-box table tr.information table td {
                  padding-bottom: 40px;
              }

              .invoice-box table tr.heading td {
                  background: #eee;
                  border-bottom: 1px solid #ddd;
                  font-weight: bold;
              }

              .invoice-box table tr.details td {
                  padding-bottom: 20px;
              }

              .invoice-box table tr.item td {
                  border-bottom: 1px solid #eee;
              }

              .invoice-box table tr.item.last td {
                  border-bottom: none;
              }

              .invoice-box table tr.total td:nth-child(2) {
                  border-top: 2px solid #eee;
                  font-weight: bold;
              }

              @media only screen and (max-width: 600px) {
                  .invoice-box table tr.top table td {
                      width: 100%;
                      display: block;
                      text-align: center;
                  }

                  .invoice-box table tr.information table td {
                      width: 100%;
                      display: block;
                      text-align: center;
                  }
              }

              /** RTL **/
              .invoice-box.rtl {
                  direction: rtl;
                  font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
              }

              .invoice-box.rtl table {
                  text-align: right;
              }

              .invoice-box.rtl table tr td:nth-child(2) {
                  text-align: left;
              }
          </style>
      </head>

      <body class="fr-no-selection">
          <div class="invoice-box">
              <table cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr class="top">
                          <td colspan="2">
                              <table>
                                  <tbody>
                                      <tr>
                                          <td class="title">
                                              <div style="text-align: center;"><img src="https://myfiles.space/user_files/91396_e966e7460d24c3e4/91396_custom_files/img1625833024.jpeg" style="width: 348px;"></div>
                                          </td>
                                          <td>후원 #: ${random}<br>Created: ${today}<br></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </td>
                      </tr>
                      <tr class="information">
                          <td colspan="2">
                              <table>
                                  <tbody>
                                      <tr>
                                          <td>Remember, Inc.<br><span style="color: rgb(67, 67, 67); font-family: Gulim; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline !important;">경기도 성남시 분당구 대왕판교로236번길 22</span></td>
                                          <td><br>${name}<br>${email}</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </td>
                      </tr>
                      <tr class="heading">
                          <td>지불 방식</td>
                          <td>Check #</td>
                      </tr>
                      <tr class="details">
                          <td>Online</td>
                          <td>1000</td>
                      </tr>
                      <tr class="heading">
                          <td>후원처</td>
                          <td>후원 금액</td>
                      </tr>
                      <tr class="item">
                          <td>${title} 후원</td>
                          <td>₩${amount}</td>
                      </tr>
                      <tr class="item">
                          <td><br></td>
                          <td><br></td>
                      </tr>
                      <tr class="item last">
                          <td><br></td>
                          <td><br></td>
                      </tr>
                      <tr class="total">
                          <td><br></td>
                          <td>Total: ₩${amount}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </body>
      `,
    });
  },
};

export default nodemailerController;
