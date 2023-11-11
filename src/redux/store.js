import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import quizReduser from './slices/quizSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        quiz: quizReduser,
    }
});

export default store;