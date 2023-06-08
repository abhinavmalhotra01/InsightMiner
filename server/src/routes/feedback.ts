import express from "express";

import { feedbackSubmit } from "../controllers/feedback";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.post("/feedback/:name",isAuthenticated,feedbackSubmit)
};
