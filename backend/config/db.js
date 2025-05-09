import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://rynnschool12:Ryandra1208@cluster0.ubjf5ui.mongodb.net/').then(()=>console.log("DB Connected"))
};