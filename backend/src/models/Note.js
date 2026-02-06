import mongoose from "mongoose";

//1 - create a schema
//2- model based off of that schema

const noteSchema = new mongoose.Schema({
    title: {
        typr: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
{timestamps:true} // mongoose will automatically add createdAt(dates) and updatedAt fields to the schema
)

const Note = mongoose.model("Note", noteSchema);

export default Note;