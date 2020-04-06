import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utils/store";


//HOWTO Manage global state n°1 - Declare a new slice for the redux store
const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: ('counterSlice'),
    initialState,
    reducers: {
        add(state) {
            state.value = state.value + 1
        },
        addSeveral(state, action: PayloadAction<number>) {
            state.value = state.value + action.payload
        },
        remove(state) {
            state.value = state.value - 1
        }
    }
})

export const counterValueSelector = (state: RootState) => state.counterSlice.value

export const counterDoubleSelector = createSelector(
    counterValueSelector,
    (value) => value * 2
)


export const {
    add,
    addSeveral,
    remove,
} = counterSlice.actions

export default counterSlice.reducer