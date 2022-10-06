import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    message : "" 
} 

const alertSlice = createSlice({
    name: 'alert',
    initialState:initialState,
    reducers: {
        setMessage: (state, action:PayloadAction<string>)  => {
                console.log("alter payload",action.payload);
                state.message = action.payload;

        },
    },
  })

  export const {setMessage} = alertSlice.actions;
  export default alertSlice.reducer;