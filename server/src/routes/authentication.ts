import express from "express";

import {login, logoutUser, register } from "../controllers/authentication";

export default (router: express.Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
  router.get("/auth/logout",logoutUser)
  // router.get("/auth/register",handleRefreshToken)
};
