import User from "./../models/User.js";
import bcryptjs from 'bcryptjs';

const userHealth = (req,res)=>{
    res.json({
        message:'Api is working'
    })
};

const signupApi = async (req, res)=>{
    const { username, password, email } = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({
            message:'All fields are required'
        });
    }
    
const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password : hashPassword,
    })

 try{
    const savedUser =  await newUser.save();
   
    res.json({
        success:true,
        data:savedUser,
        message:"signup successfully"
    })
 }
 catch(err){
    res.status(500).json(
        {message:err.message}
        );
 }
}

export { userHealth, signupApi } ;