import express from "express";
import dotenv from "dotenv";
import router from "../BACKEND/routes/dummyRoute.js";

const app = express();

app.use(express.json());
app.use(cors())

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`App is listening port : ${PORT}`);
});
