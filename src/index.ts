import express from "express";
import { Db } from "mongodb";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import { seedIntialProdcuts } from "./services/productService.js";
import productRouter from "./routes/prodcutRoute.js";

const app = express();

//middlware
app.use(express.json());

//routes
app.use('/user', userRouter )
app.use('/products', productRouter );

//connect DB
mongoose
.connect("mongodb://localhost:27017/e-commerce")
.then(() => console.log("conncted database"))
.catch((err) => console.log(`I have an error: ${err}`));

// seed products
seedIntialProdcuts();

//listen server
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
