import User from "./../models/User.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "./../utils/error.js";

const userHealth = (req, res) => {
  res.json({
    message: "Api is working",
  });
};

const signupApi = async (req, res, next) => {
  const { username, password, email } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // return res.status(400).json({
    //   message: "All fields are required",
    // });
    next(errorHandler(400, 'all field are required')); //errorhandler which is coming for utes fror/error
  }

  const hashPassword = bcryptjs.hashSync(password, 10); //code for hash password

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    const savedUser = await newUser.save();

    res.json({
      success: true,
      data: savedUser,
      message: "signup successfully",
    });
  } catch (err) {
    next(err);
  }
};

export { userHealth, signupApi };
