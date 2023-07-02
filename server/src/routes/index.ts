import express from "express";

import authentication from "./authentication";
import users from "./users";
import feedback from "./feedback";
import sentiment from "./sentiment";
import dashboard from "./dashboard";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  feedback(router);
  sentiment(router);
  dashboard(router)
  return router;
};
