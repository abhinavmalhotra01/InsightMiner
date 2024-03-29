import express from "express";
import { createFeedbackD } from "../models/Demonetisation";
import { createFeedbackG } from "../models/GST";
import { createFeedbackM } from "../models/MakeInIndia";
import { createFeedbackSt } from "../models/StartupScheme";
import { createFeedbackS } from "../models/SwachBharat";
export const feedbackSubmit = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name } = req.params;
    const { answer1, answer2, answer3, answer4, answer5, answer6 } = req.body;
    // console.log("hjh")
    if (!answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !answer6) {
      // console.log(name);
      return res.status(404).json({ message: "Please fill all fields" }).end();
    }
    if (name === "Demonetisation") {
      // console.log("a")
      const feedback = await createFeedbackD({
        name,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
      });
    } else if (name === "GST") {
      // console.log("b");
      const feedback = await createFeedbackG({
        name,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
      });
      // console.log("h")
    } else if (name === "MakeInIndia") {
      // console.log("c");
      const feedback = await createFeedbackM({
        name,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
      });
    } else if (name === "StartupScheme") {
      // console.log("d");
      const feedback = await createFeedbackSt({
        name,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
      });
    } else if (name === "SwachBharat") {
      // console.log("e");
      const feedback = await createFeedbackS({
        name,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
      });
    }
    return res.status(200).json({"message":"OK"}).end();
  } catch (error) {
    return res.status(404).end();
  }
};
