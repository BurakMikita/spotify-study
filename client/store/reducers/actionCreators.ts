import axios from "axios";
import { AppDispatch } from ".";
import { fetchTracks, fetchTracksError } from "./trackReducer";
import { ITrack } from "@/types/track";




export const fetchUsers = (serch?: string) => async (dispatch: AppDispatch) => {
        try {
           
            const response = await axios.get< ITrack[]>(`http://localhost:5000/tracks?search=${serch}`)
            
            dispatch(fetchTracks(response.data))
        } catch (e) {
            dispatch(fetchTracksError("ошибка"))
        }
    }


    
export const fetchDeletUser = (id: string) => async (dispatch: AppDispatch) => {
    try {
       console.log(id)
        const response = await axios.delete< ITrack>(`http://localhost:5000/tracks/${id}`)
        
        dispatch(fetchUsers())
    } catch (e) {
        dispatch(fetchTracksError("ошибка"))
    }
}