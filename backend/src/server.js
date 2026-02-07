import express from "express";
import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json()); // to parse the incoming JSON data and access it in the req.body object.


connectDB();

app.use("/api/notes" , notesRoutes);


app.listen(PORT , ()=>{
    console.log("Server started at port :" , PORT);
})