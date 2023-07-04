import express from "express";
import GSTFB from "../models/GSTFb";
import DemonetisationFB from "../models/DemonetisationFb";
import SwachBharatFB from "../models/SwachBharatFb";
import StartupSchemeFB from "../models/StartupSchemeFb";
import MakeInIndiaFB from "../models/MakeInIndiaFb";

function getMax(arr: number[]): number {
  let max = arr[0];
  for (const element of arr) {
    if (element >= max) {
      max = element;
    }
  }
  return max;
}
export const ratings = async (req: express.Request, res: express.Response) => {
  try {
    const { name } = req.params;
    // console.log(name);
    let results: any[];
    if (name == "GST") {
      results = await GSTFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "Demonetisation") {
      results = await DemonetisationFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "SwachBharat") {
      results = await SwachBharatFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "StartupScheme") {
      results = await StartupSchemeFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "MakeInIndia") {
      results = await MakeInIndiaFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else {
      return res.status(400).end();
    }
    // console.log(results);
    return res.status(200).json(results);
  } catch (error) {
    // console.error("Error counting ratings:", error);
    return res.status(400).json(error);
  }
};
export const sentiments = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name } = req.params;
    let results: any[];
    if (name == "GST") {
      results = await GSTFB.aggregate([
        {
          $group: {
            _id: "$sentiments",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            sentiments: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "Demonetisation") {
      results = await DemonetisationFB.aggregate([
        {
          $group: {
            _id: "$sentiments",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            sentiments: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "MakeInIndia") {
      results = await MakeInIndiaFB.aggregate([
        {
          $group: {
            _id: "$sentiments",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            sentiments: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "SwachBharat") {
      results = await SwachBharatFB.aggregate([
        {
          $group: {
            _id: "$sentiments",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            sentiments: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "StartupScheme") {
      results = await StartupSchemeFB.aggregate([
        {
          $group: {
            _id: "$sentiments",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            sentiments: "$_id",
            count: 1,
          },
        },
      ]);
    } else {
      return res.status(400).end();
    }
    // console.log(results);
    return res.status(200).json(results);
  } catch (error) {
    // console.error("Error counting ratings:", error);
    return res.status(400).json(error);
  }
};
export const genConsensus = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name } = req.params;
    let results: any[];
    if (name == "GST") {
      results = await GSTFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "Demonetisation") {
      results = await DemonetisationFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "SwachBharat") {
      results = await SwachBharatFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "StartupScheme") {
      results = await StartupSchemeFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else if (name == "MakeInIndia") {
      results = await MakeInIndiaFB.aggregate([
        {
          $group: {
            _id: "$rating",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            rating: "$_id",
            count: 1,
          },
        },
      ]);
    } else {
      return res.sendStatus(400);
    }
    let countOfOne: number = 0;
    let countOfTwo: number = 0;
    let countOfThree: number = 0;
    let countOfFour: number = 0;
    let countOfFive: number = 0;
    results.forEach((curr) => {
      if (curr.rating == 1) {
        countOfOne = curr.count;
      }
      if (curr.rating == 2) {
        countOfTwo = curr.count;
      }
      if (curr.rating == 3) {
        countOfThree = curr.count;
      }
      if (curr.rating == 4) {
        countOfFour = curr.count;
      }
      if (curr.rating == 5) {
        countOfFive = curr.count;
      }
    });
    // console.log(countOfFive, countOfTwo, countOfOne, countOfFour, countOfThree);
    let genConsensus: string;
    let heading: string;
    const array: number[] = [
      countOfFive,
      countOfTwo,
      countOfOne,
      countOfFour,
      countOfThree,
    ];
    // console.log(getMax(array));
    if (countOfFive === getMax(array)) {
      heading = "Excellent";
      genConsensus =
        "The general consensus is that the Policy is excellent.The majority of people agree that the service is outstanding.";
    }
    if (countOfFour === getMax(array)) {
      heading = "Good";
      genConsensus =
        "The general consensus is that the Policy is very good.The majority of people believe that the service is satisfactory.";
    }
    if (countOfThree === getMax(array)) {
      heading = "Average";
      genConsensus =
        "The general consensus is that the Policy is average.The majority of people believe that the service is acceptable.";
    }
    if (countOfTwo === getMax(array)) {
      heading = "Poor";
      genConsensus =
        "The general consensus is that the Policy is poor.The majority of people believe that the service is unsatisfactory.";
    }
    if (countOfOne === getMax(array)) {
      // console.log("a");
      heading = "Horrible";
      genConsensus =
        "The general consensus is that the Policy is horrible.The majority of people believe that the service is terrible.";
    }
    // console.log(heading, genConsensus);
    return res.status(200).json({ heading, genConsensus });
  } catch (error) {
    // console.error("Error counting ratings:", error);
    return res.status(400).json(error);
  }
};

export const keyWord = async (
  req: express.Request,
  res: express.Response
) => {
  try{
    const { name } = req.params;
    let results: any[];
    const k = 4;
    if(name=="GST"){
      results = await GSTFB.aggregate([
        {
          $group: {
            _id: "$topKeyword",
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            count: -1,
          },
        },
        {
          $limit: k,
        },
        {
          $project: {
            _id: 0,
            topKeyword: "$_id",
            count: 1,
          },
        },
      ]);
    }
    else if(name=="MakeInIndia"){
      results = await MakeInIndiaFB.aggregate([
        {
          $group: {
            _id: "$topKeyword",
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            count: -1,
          },
        },
        {
          $limit: k,
        },
        {
          $project: {
            _id: 0,
            topKeyword: "$_id",
            count: 1,
          },
        },
      ]);
    }
    else if(name=="StartupScheme"){
      results = await StartupSchemeFB.aggregate([
        {
          $group: {
            _id: "$topKeyword",
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            count: -1,
          },
        },
        {
          $limit: k,
        },
        {
          $project: {
            _id: 0,
            topKeyword: "$_id",
            count: 1,
          },
        },
      ]);
    }
    else if(name=="SwachBharat"){
      results = await SwachBharatFB.aggregate([
        {
          $group: {
            _id: "$topKeyword",
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            count: -1,
          },
        },
        {
          $limit: k,
        },
        {
          $project: {
            _id: 0,
            topKeyword: "$_id",
            count: 1,
          },
        },
      ]);
    }
    else if(name=="Demonetisation"){
      results = await DemonetisationFB.aggregate([
        {
          $group: {
            _id: "$topKeyword",
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            count: -1,
          },
        },
        {
          $limit: k,
        },
        {
          $project: {
            _id: 0,
            topKeyword: "$_id",
            count: 1,
          },
        },
      ]);
    }else{
      return res.status(400).end();
    }
    // console.log(results);
    return res.status(200).json(results);
  }catch(error){
    return res.status(400).json(error);
  }
};
