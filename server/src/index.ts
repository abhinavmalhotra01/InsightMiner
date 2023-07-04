import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import router from "./routes"
import mongoose from "mongoose";
dotenv.config();


const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(
    `server is currently running on http://localhost:${process.env.PORT}`
  );
});
const MONGO_URL = process.env.MONGO_URL; // DB URI

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
app.use("/", router());

export default app;