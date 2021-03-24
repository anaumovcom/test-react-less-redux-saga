import {createSlice} from "@reduxjs/toolkit";

export interface TextState {
    text: string,
}

const initialState: TextState = {
    text: 'Initial text'
}

export const textSlice = createSlice({
    name: 'textSlice',
    initialState,
    reducers: {
        update(state: TextState) {
            state.text += '!';
        },
        clear(state: TextState) {
            state.text = initialState.text;
        }
    }
})

export default textSlice.reducer;
export const {update, clear} = textSlice.actions;