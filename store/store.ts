import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import userReducer from './userSlice'
import alertReducer from './alertSlice'

// combine reducer
const combinedReducer = combineReducers({
    users: userReducer,
    alert: alertReducer,
  });
  
// marge newly created server store to client store
const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

// //make store
// export const makeStore  = () => 
// configureStore({
//     users: userReducer,
//     alert: alertReducer,
// });

// type Store  = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself for hook
// export type RootState = ReturnType<Store['getState']>
// // Inferred type: {users: UsersState}
// export type AppDispatch = Store['dispatch'];

// export const wrapper = createWrapper(makeStore, { debug: true });
