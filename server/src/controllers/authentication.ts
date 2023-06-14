import express from "express";

import { getUserByEmail, createUser } from "../models/User";
import { authentication, random } from "../utils";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(404);
    }
    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );
    if (!user) {
      return res.status(403).json({ message: "the email is not registered" });
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password != expectedHash) {
      return res
        .status(403)
        .json({ message: "the email and password dont match" });
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();

    res.cookie(process.env.SECRET, user.authentication.sessionToken, {
      path: "/",
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    });

    const tokenFront = user.authentication.sessionToken;

    res.status(200).json({ tokenFront});
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(404).json({ message: "fck u" });
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(404).json({ message: "oh no" });
    }
    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
