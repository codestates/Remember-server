import { Request, Response } from "express";
import { Todays } from "../../models/Todays";

const todayController = {
  todayController: async (req: Request, res: Response) => {
    const { check } = req.body;
    let peopleVisited = Math.floor(Math.random() * 10000) + 1000;
    if (peopleVisited > 1000) {
      peopleVisited = peopleVisited + 9000;
    }

    const todayVisited = await Todays.findOne({
      where: { todayDate: check },
    });

    if (!todayVisited) {
      // 새로운 날짜
      const TodayNumber = await Todays.create({
        visited: peopleVisited,
        todayDate: check,
      });
      res.status(200).send({ data: TodayNumber!.visited }); //deploy error
    } else {
      // 기존 날짜

      await Todays.increment("visited", {
        where: { todayDate: check },
      });
      const TodayNumber = await Todays.findOne({
        where: { todayDate: check },
      });
      res.status(200).send({ data: TodayNumber!.visited }); //deploy error
    }
  },
};

export default todayController;
