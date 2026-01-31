import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/dummyRoute.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`App is listening port : ${PORT}`);
});
