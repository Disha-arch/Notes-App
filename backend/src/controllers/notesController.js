import Note from "../models/Note.js"

export const getNotes = async (req,res)=>{
    try {
        const note = await Note.find();
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNotes controller", error)
        res.status(500).json({message: "Internal server error:",error});
    }
}

export const createNote = async (req,res)=>{
    try {
        const{title,content} = req.body;  // to access the data sent in the request body from the frontend to create a new note we need to setup body parsing middleware in the server.js file using express.json() method. This will allow us to parse the incoming JSON data and access it in the req.body object.
        const note = new Note({title , content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller", error)
        res.status(500).json({message: "Internal server error:",error});
    }
}

export const updateNote = async (req,res)=>{
    try {
        const {title , content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id , {title,content} , {new:true});

        if(!updatedNote) return res.status(404).json({message:"Note not found "});

        res.status(200).json({updatedNote});
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({message:"Internal server error",error});
    }
}

export const deleteNote = (req,res)=>{
    res.status(201).json({message:"Note is deleted successfully !!"})
}