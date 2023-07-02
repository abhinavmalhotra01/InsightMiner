import express from "express"
import { verifyToken } from "../middlewares";
import { sentimentSubmit } from "../controllers/sentiment";

export default (router: express.Router) => {
  router.post("/sentiment/:name",sentimentSubmit)
};

