import express from "express"
import notesRoute from "./routes/notesRoute.js"

const app = express();

app.use("/api/notes" , notesRoute);


app.listen(5000, () => {
    console.log("Server started on port : 5000");
})
