import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
    showCounter: false
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increment: (state) => {
            state.value+=1;
        },
        increase: (state, action) => {
            state.value = state.value + action.payload;
        },
        decrement: (state) => {
            state.value-=1;
        },
        toggle: (state) => {
            state.showCounter = !state.showCounter;
        }
    }
})

export const {increment, increase, decrement, toggle} = counterSlice.actions;
export default counterSlice.reducer;