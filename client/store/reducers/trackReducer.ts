import {  createSlice } from "@reduxjs/toolkit";
import { TrackState } from "@/types/track";

const initialState: TrackState = {
    tracks: [],
    error: ''
}





export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        fetchTracks: (state, action) => {
            state.tracks = action.payload
        },
        fetchTracksError: (state, action) => {
            state.error = action.payload
        },
       
    }
  })

  export const {fetchTracksError,fetchTracks } = trackSlice.actions