import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";


// app config
const app = express();
// const port = process.env.PORT || 4000;
const port = 4000;


// middleware
app.use(express.json());
app.use(cors());


// mongodb+srv://hrithikrana:334455667788@cluster1.e3rdlxe.mongodb.net/?


// DB Connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/", (req, res) => {
  res.send("API Working!");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});