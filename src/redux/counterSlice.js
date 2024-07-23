import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    // configure name of our counter
    name: "counter",
    // First value you would like to have when your app open, initializer
    initialState: {
        count: 0
    },
    // reducer is the action that you can get to call e.g onclick action
    reducers: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        },
        
        // This can be applicable to Siya's section
    }
})

// Way to organise and manage redux state, same as cardReducer

// From the actions(functions) in the counterSlice, these are the one I would like to export
export const {increment, decrement } = counterSlice.actions
// export the whole reducer
export default counterSlice.reducer