import express from "express";
import cors from "cors"
import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

if(process.env.NODE_ENV !== "production"){
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    );
}

//middleware
app.use(express.json()); // to parse the incoming JSON data and access it in the req.body object.
app.use(rateLimiter);



app.use("/api/notes" ,  notesRoutes);

if(process.env.NODE_ENV=="production"){
    app.use(express.static(path.join(__dirname,"../frontend/notes-app-react/dist")))

    app.get((req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend/notes-app-react/dist/index.html"));
    })
}

// this means that first database will be connected and then only server will listen
connectDB().then(()=>{
    app.listen(PORT , ()=>{
        console.log("Server started at port :" , PORT);
    })
})

