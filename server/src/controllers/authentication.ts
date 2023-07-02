import express from "express";
import bcrypt from "bcrypt";
import { getUserByEmail, createUser, UserModel, getUserBySessionToken } from "../models/User";
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

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    delete user.authentication.password;
    res.status(200).json({token,user});
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

export const logoutUser = async (
  req: express.Request,
  res: express.Response
) => {
  // const cookies = req.cookies;
  // if (!cookies?.jwt) return res.sendStatus(204); //No content
  // const refreshToken = cookies.jwt;

  // // Is refreshToken in db?
  // const foundUser = await UserModel.findOne({ refreshToken }).exec();
  // if (!foundUser) {
  //   res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  //   return res.sendStatus(204);
  // }

  // // Delete refreshToken in db
  // foundUser.authentication.refreshToken =
  //   foundUser.authentication.refreshToken.filter((rt) => rt !== refreshToken);
  // const result = await foundUser.save();
  // console.log(result);

  // res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  // res.sendStatus(204);
  try {
    const sessionToken = req.cookies[process.env.SECRET];
    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }
    existingUser.authentication.sessionToken = null;
    await existingUser.save();
    res.clearCookie(process.env.SECRET);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

// export const handleRefreshToken = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   const cookies = req.cookies;
//   if (!cookies?.jwt) return res.sendStatus(401);
//   const refreshToken = cookies.jwt;
//   res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });

//   const foundUser = await UserModel.findOne({ refreshToken }).exec();

//   // Detected refresh token reuse!
//   if (!foundUser) {
//     jwt.verify(
//       refreshToken,
//       process.env.REFRESH_TOKEN_SECRET,
//       async (err: any, decoded: { username: any }) => {
//         if (err) return res.sendStatus(403); //Forbidden
//         // Delete refresh tokens of hacked user
//         const hackedUser = await UserModel.findOne({
//           username: decoded.username,
//         }).exec();
//         hackedUser.authentication.refreshToken = [];
//         const result = await hackedUser.save();
//       }
//     );
//     return res.sendStatus(403); //Forbidden
//   }

//   const newRefreshTokenArray = foundUser.authentication.refreshToken.filter(
//     (rt) => rt !== refreshToken
//   );

//   // evaluate jwt
//   jwt.verify(
//     refreshToken,
//     process.env.REFRESH_TOKEN_SECRET,
//     async (err: any, decoded: { username: string }) => {
//       if (err) {
//         // expired refresh token
//         foundUser.authentication.refreshToken = [...newRefreshTokenArray];
//         const result = await foundUser.save();
//       }
//       if (err || foundUser.username !== decoded.username)
//         return res.sendStatus(403);

//       // Refresh token was still valid
//       const accessToken = jwt.sign(
//         {
//           UserInfo: {
//             username: decoded.username,
//           },
//         },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" }
//       );

//       const newRefreshToken = jwt.sign(
//         { username: foundUser.username },
//         process.env.REFRESH_SECRET,
//         { expiresIn: "72h" }
//       );
//       // Saving refreshToken with current user
//       foundUser.authentication.refreshToken = [
//         ...newRefreshTokenArray,
//         newRefreshToken,
//       ];
//       const result = await foundUser.save();

//       // Creates Secure Cookie with refresh token
//       res.cookie("jwt", newRefreshToken, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "none",
//         maxAge: 24 * 60 * 60 * 1000,
//       });

//       res.json({ accessToken });
//     }
//   );
// };
