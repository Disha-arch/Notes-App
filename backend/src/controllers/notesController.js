export const getNotes = (req,res)=>{
    res.status(200).send("You fetched the note successfully!!");
}

export const createNote = (req,res)=>{
    res.status(201).json({message:"Note is created successfully !!"})
}

export const updateNote = (req,res)=>{
    res.status(201).json({message:"Note is updated successfully !!"})
}

export const deleteNote = (req,res)=>{
    res.status(201).json({message:"Note is deleted successfully !!"})
}