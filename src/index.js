import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';

const app = express();

dotenv.config();

mongoose.connect(process.env.URI).then(()=>{console.log("Database Connected")}).catch((error)=>{
    console.log('error')
})






app.listen(process.env.PORT, ()=>{
    console.log(`App is running on ${process.env.PORT}`)
})