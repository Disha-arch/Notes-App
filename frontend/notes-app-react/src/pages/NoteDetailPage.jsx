import { useState ,  useEffect } from "react";
import {useNavigate , useParams} from "react-router-dom"
import api from "../lib/axios"
import toast from "react-hot-toast"

const NoteDetailPage = () => {
    const[note,setNote]=useState(null);
    const[loading , setLoading] = useState(true);
    const[saving , setSaving] = useState(false);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        const fetchNote = async () => {
            try {
                const res = await api.get(`/notes/${id}`)
                setNote(res.data);
            } catch (error) {
                console.log("Error in fetching note",error);
                toast.error("Failed to fetch the note");
            } finally{
                setLoading(false);
            }
        }
        fetchNote();
    },[id])

    console.log({note})

    return(
        <div>NoteDetailPage</div>
    )
}

export default NoteDetailPage;