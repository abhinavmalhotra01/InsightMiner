import express from "express";
import { getSentiment } from "../controllers/nlp";
import { createFeedbackDS } from "../models/DemonetisationFb";
import { createFeedbackGS } from "../models/GSTFb";
import { createFeedbackMS } from "../models/MakeInIndiaFb";
import { createFeedbackStS } from "../models/StartupSchemeFb";
import { createFeedbackSS } from "../models/SwachBharatFb";

// router.post("/feedback/:name", verifyToken, feedbackSubmit);
function findMostOccurringWord(sentences: string[]): string | null {
  if (sentences.length === 0) {
    return null;
  }

  const wordCount: { [key: string]: number } = {};
  sentences.forEach((sentence) => {
    const words = sentence.split(" ");
    words.forEach((word) => {
      if (word !== "") {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });
  });

  let mostOccurringWord = "";
  let maxOccurrences = 0;
  for (const word in wordCount) {
    if (wordCount[word] > maxOccurrences) {
      mostOccurringWord = word;
      maxOccurrences = wordCount[word];
    }
  }

  return mostOccurringWord;
}

export const sentimentSubmit = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { answer1, answer2, answer3, answer4, rating } = req.body;
    const data: string[] = [answer1, answer2, answer4, answer3];
    const { name } = req.params;
    // console.log(data)
    const sentimentsArr = data.map((element: string) => getSentiment(element));
    let sentiments: number = 0;
    for (let i = 0; i < sentimentsArr.length; i++) {
      sentiments = sentiments + sentimentsArr[i];
    }
    sentiments = sentiments / sentimentsArr.length;
    const topKeyword = findMostOccurringWord(data);
    // console.log(mostOccurringWord);
    // console.log(sentiments);
    if (sentiments < 0) {
      sentiments = -1;
    } else if (sentiments === 0) {
      sentiments = 0;
    } else {
      sentiments = 1;
    }
    // console.log(sentiments);
    // console.log(sentiments);
    // return res.send({ sentiments, sentiments, mostOccurringWord });
    if (name === "Demonetisation") {
      // console.log("a")
      const feedbackSentiment = await createFeedbackDS({
        name,
        sentiments,
        topKeyword,
        rating
      });
    } else if (name === "GST") {
    //   console.log("b",name,sentiments,topKeyword,rating);
      const feedbackSentiment = await createFeedbackGS({
        name,
        sentiments,
        topKeyword,
        rating
      });
    //   console.log("h")
    } else if (name === "MakeInIndia") {
      // console.log("c");
      const feedbackSentiment = await createFeedbackMS({
        name,
        sentiments,
        topKeyword,
        rating
      });
    } else if (name === "StartupScheme") {
      // console.log("d");
      const feedbackSentiment = await createFeedbackStS({
        name,
        sentiments,
        topKeyword,
        rating
      });
    } else if (name === "SwachBharat") {
      // console.log("e");
      const feedbackSentiment = await createFeedbackSS({
        name,
        sentiments,
        topKeyword,
        rating
      });
    }else{
        return res.sendStatus(400);
    }
    return res.status(200).json({ message: "OK" }).end();
  } catch (err) {
    // console.log(err);
    return res.status(400).json({message:err}).end()
  }
};
