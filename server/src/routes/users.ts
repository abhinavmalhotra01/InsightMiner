import express from "express";

import { getAllUsers, deleteUser, updateUser } from "../controllers/users";
import {  verifyToken,isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/users", verifyToken, getAllUsers);
  router.delete("/users/:id", verifyToken, isOwner, deleteUser);
  router.patch("/users/:id", verifyToken, isOwner, updateUser);
};
