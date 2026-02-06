import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://guptadisha1009_db_user:hqzxvGixjkFANuge@cluster0.syfoy3s.mongodb.net/?appName=Cluster0")
        console.log("MONGODB connected successfully !! ")
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}