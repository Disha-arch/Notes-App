import express from "express";
import { getNotes  , createNote , updateNote , deleteNote , getNoteById} from "../controllers/notesController.js";

const route = express.Router();

route.get("/" , getNotes);
route.get("/:id" , getNoteById);
route.post("/" , createNote);
route.put("/:id" , updateNote);
route.delete("/:id" , deleteNote);

export default route;
