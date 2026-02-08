import express from "express";
import notesRoutes from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json()); // to parse the incoming JSON data and access it in the req.body object.
app.use(rateLimiter);

//our simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & req url is ${req.url}`);
//     next();
// })

connectDB();

app.use("/api/notes" , notesRoutes);


app.listen(PORT , ()=>{
    console.log("Server started at port :" , PORT);
})