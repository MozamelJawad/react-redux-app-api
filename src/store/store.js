import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../store/users/usersSlice';
export const store = configureStore({
    reducer: {
        users: usersReducer ,
    },
});