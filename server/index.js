import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import { userHealth, signupApi } from "./controllers/userController.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

//connection
const connectMongoDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log('💖mongoDB is connected');
    }
}
connectMongoDB();

//apis
app.get('/api/health',userHealth);
app.post('/api/v1/signup',signupApi)


app.listen(PORT, ()=>{
    console.log(`port is running on ${PORT}`)
})