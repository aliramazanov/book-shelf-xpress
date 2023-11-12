import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { port, uri } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome!");
});

app.use("/books", booksRoute);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Application successfully connected to the Database");
    app.listen(port, () => {
      console.log(`Application is listening to Port:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });
