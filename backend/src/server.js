import express from "express";
import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use("/api/notes" , notesRoutes);


app.listen(5000 , ()=>{
    console.log("Server started at port 5000");
})