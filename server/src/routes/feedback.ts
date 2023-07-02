import express from "express";

import { feedbackSubmit } from "../controllers/feedback";
import {  verifyToken } from "../middlewares";

export default (router: express.Router) => {
  router.post("/feedback/:name",verifyToken,feedbackSubmit)
};
