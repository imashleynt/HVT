import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://tuongvy:tuongvy123@cluster0.8chtf.mongodb.net/coffee-web').then(()=>console.log("DB Connected"));
}