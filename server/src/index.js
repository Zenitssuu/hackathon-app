import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//db
import { connectDB } from "./db/index.js";

const app = express();
const PORT = process.env.PORT || 4000;
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//routes
import { hackathonRouter, userRouter } from "./routes/routes.js";
app.use("/api/v1/contests", hackathonRouter);
app.use("/api/v1/user", userRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("running on port ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use((err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
