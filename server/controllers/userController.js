import User from "./../models/User.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "./../utils/error.js";
import jwt from "jsonwebtoken";

const userHealth = (req, res) => {
  res.json({
    message: "Api is working",
  });
};
//signup
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

//login
const signinApi = async (req,res, next)=>{
  const {email, password} = req.body;

  if(!email || !password || email === '' || password === ''){
    next(errorHandler(400, 'All fields are required'));
  }
  try{
    const validUser = await User.findOne({ email });
    if(!validUser){
      return next(errorHandler(404, 'user not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
      return next(errorHandler(400, 'Invaild password'));
    }

    const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET);

    const { password: pass, ...rest} = validUser._doc; //password hiding code

      //create a res and add or send a cookie
      res.status(200).cookie( 'access_token', token, {
        httpOnly: true,
      })
      .json(rest);   

    }catch(error){
    next(error);
  }
}

export { userHealth, signupApi, signinApi };
