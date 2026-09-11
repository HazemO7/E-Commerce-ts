import express from "express";
import { Db } from "mongodb";
import mongoose from "mongoose";

const app = express();

//middlware
app.use(express.json());



//connect DB
mongoose
.connect("mongodb://localhost:27017/e-commerce")
.then(() => console.log("conncted database"))
.catch((err) => console.log(`I have an error: ${err}`));


//listen server
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
