import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import counterSlice from '../stateful-components/counterSlice';

const rootReducer = combineReducers({
    counterSlice
})

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>


const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export default store