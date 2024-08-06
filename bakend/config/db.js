import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://victormuhoro7:Donbosco32@cluster0.kyhqdtm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}