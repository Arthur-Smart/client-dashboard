import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentCost:2355323
};

export const costSlice = createSlice({
    name:'expense',
    initialState,
    reducers:{
        appendCost: (state, action) => {
           state.currentUser += action.payload;
        }
    }
});

export const {appendCost} = costSlice.actions;

export default costSlice.reducer;
