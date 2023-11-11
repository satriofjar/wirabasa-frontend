import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {
        data:[],
    },
    reducers: {
        addToUser: (state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const { addToUser } = userSlice.actions;
export default userSlice.reducer;