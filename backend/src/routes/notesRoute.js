import express from "express";
import { getNotes  , createNote , updateNote , deleteNote} from "../controllers/notesController.js";

const route = express.Router();

route.get("/" , getNotes);
route.post("/" , createNote);
route.put("/:id" , updateNote);
route.delete("/:id" , deleteNote);

export default route;