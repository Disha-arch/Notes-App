export const getAllNotes = (req,res)=>{
    res.status(200).send("You fetched the notes successfully !!");
}

export const createNote = (req,res)=>{
    res.status(201).json({message:"Note created successfully !!"})
}