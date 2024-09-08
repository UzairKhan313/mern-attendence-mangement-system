import "express-async-errors"; // handling async error. make it is on the top of the root file.
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import morgan from "morgan";
import { StatusCodes } from "http-status-codes";

import errorHandlerMiddleware from "./middleware/error.js";
import authRouter from "./routes/auth.js";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();
app.use(
  cors({
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

// For diplay the route and request information..
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Cookie parser middleware.
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving image staticaly.
app.use("/uploads/images", express.static(path.join("/uploads", "images")));

app.use("/api/v1/auth", authRouter);

// Not found Routes Error.
app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "not found" });
});

//Error Handler Middlewar.
app.use(errorHandlerMiddleware);

try {
  mongoose.connect(process.env.MONGODB_URL);
  app.listen(port, () => {
    console.log(
      `server running and connected to Database on http://localhost:${port}`
    );
  });
} catch (error) {
  console.log(error);
  console.log("falid to connect to the data base.");
  process.exit(1);
}
