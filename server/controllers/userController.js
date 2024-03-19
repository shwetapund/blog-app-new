import User from "./../models/User.js";

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
    
    const newUser = new User({
        username,
        email,
        password
    })

   const savedUser =  await newUser.save();
   
    res.json({
        success:true,
        data:savedUser,
        message:"signup successfully"
    })
}

export { userHealth, signupApi } ;