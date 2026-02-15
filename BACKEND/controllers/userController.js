import User from "../models/userModel.js";
import { reqBodyHandler } from "../middlewares/userMiddleware.js";

// method : get
// route : /users
async function getUser(req, res) {
  const users = await User.find();
  res.status(200).json({ users, message: "users fetched" });
}

const postUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const user = await User.create({
      name ,
      email,
      password 
    })
    console.log("post controller ran")
    res.status(201).json({
      message: "User created",
      user
    })
  } 
  catch (error) {
    res.status(400).json({
      message: "User creation failed",
      error: error.message
    })
  }
}

// delete controller 
const deleteUser = async(req, res) => {
    const user = req.body.userId || req.body.email;
    User.deleteOne({user})
}


export { getUser, postUser}