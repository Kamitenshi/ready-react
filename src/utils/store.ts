import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from '../stateful-components/counterSlice';

//HOWTO Manage global state n°2 - Add the new slice to the store
const rootReducer = combineReducers({
    counterSlice
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export default store