import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import alertReducer from './alertSlice'

//
const store = configureStore({
       reducer: {users:userReducer, alert:alertReducer}
});

// Infer the `RootState` and `AppDispatch` types from the store itself for hook
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;