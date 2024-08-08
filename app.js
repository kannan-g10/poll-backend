const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDb = require("./utils/dbConnection");

const pollRouter = require("./routes/pollRouter");
const commentsRouter = require("./routes/commentsRouter");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

connectDb();

app.use("/api/v1/polls", pollRouter);
app.use("/api/v1/comments", commentsRouter);

process.on("uncaughtException", (error) => {
  console.log(error.name, error.message);
  console.log("Uncaught exception occurred. Shutting down!");

  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.log("Unhandled Rejection:", error.name, error.message);
  console.log("Unhandled rejection occurred. Shutting down!");
  server.close(() => {
    process.exit(1);
  });
});

app.listen(port, () => console.log(`server running on ${port}`));
