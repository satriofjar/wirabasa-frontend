import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name:'quiz',
    initialState: {
        data: JSON.parse(localStorage.getItem('questions')) || null,
    },
    reducers: {
        addToQuiz: (state, action) => {
            state.data = (action.payload);
        }
    }
});

export const { addToQuiz } = quizSlice.actions;
export default quizSlice.reducer;