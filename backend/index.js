import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, uri } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:5555",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

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
    console.log("Application successfully connected to the DataBase");
    app.listen(PORT, () => {
      console.log(`Application is listening to Port:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });
