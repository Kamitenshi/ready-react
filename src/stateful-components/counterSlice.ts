import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utils/store";

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

export const getValue = (state: RootState) => state.counterSlice.value

export const {
    add,
    addSeveral,
    remove,
} = counterSlice.actions

export default counterSlice.reducer