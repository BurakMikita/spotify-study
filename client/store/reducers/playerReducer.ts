import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";
import {PlayerAction, PlayerActionTypes, PlayerState} from "../../types/player";

const initialState: PlayerState = {
    currentTime: 0,
    duration: 0,
    active: null,
    volume: 30,
    pause: true,
    
   
}





export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        playRedur: state => {
        state.pause = false
      },
      pauseRedur: state => {
        state.pause = true
      },
      setActive: (state, action) => {
        state.active = action.payload,
        state.duration = 0, state.currentTime= 0
      }, 
      setDuration: (state, action) => {
        state.duration = action.payload
      }, 
      setCurrentTime: (state, action) => {
        state.currentTime = action.payload
      }, 
      setVolune: (state, action) => {
        state.volume = action.payload
      }, 
    }
  })

  export const { playRedur, pauseRedur, setActive,
    setDuration,setCurrentTime,setVolune } = playerSlice.actions








