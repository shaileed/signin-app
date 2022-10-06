import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISignupData,ILoginData } from "../interface";


const initialState = {
    users : [] as ISignupData[],
    logedInUser: {} as ISignupData
} 

const userSlice = createSlice({
    name: 'users',
    initialState:initialState,
    reducers: {
        addNewUser: (state, action:PayloadAction<ISignupData>)  => {
                state.users.push(action.payload);

        },
        verifyUser: (state, action:PayloadAction<ISignupData>) => {
            state.logedInUser = action.payload;
        }
    },
  })

  export const {addNewUser, verifyUser} = userSlice.actions;
  export default userSlice.reducer;