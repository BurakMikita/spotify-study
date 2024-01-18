import { TypedUseSelectorHook, useSelector } from "react-redux";
import { playerSlice} from "./playerReducer";
import { configureStore } from "@reduxjs/toolkit";
import { trackSlice } from "./trackReducer";


export const store = configureStore({
    reducer: {
        player: playerSlice.reducer,
        track: trackSlice.reducer
    }
    
   
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

