import express from "express";
import User from "../models/userModel.js";
import { getUser, postUser } from "../controllers/UserController.js";
import { reqBodyHandler } from "../middlewares/userMiddleware.js";


const router = express.Router();

router.route("/users").get(reqBodyHandler, getUser).post(postUser);

// router.route("/users/:id").delete(reqBodyHandler, deleteUser).patch(patchUser);

export default router;
