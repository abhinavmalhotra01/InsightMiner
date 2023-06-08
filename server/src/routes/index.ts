import express from "express";

import authentication from "./authentication";
import users from "./users";
import feedback from "./feedback";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  feedback(router);
  return router;
};
