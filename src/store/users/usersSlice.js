import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://randomuser.me/api/?results=5';

const initialState = {
    users: [],
    isLoading: false,
    error: false,
}

export const getUsers = createAsyncThunk('users/getUsers', async() => {
    // const resp = await fetch(url)
    // const response = await resp.json()
    // const data = await response.results
    // return data

    try {
        const resp = await axios(url);
        return resp.data.results;
    } catch (error) {
        
    }
})

 const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

// console.log(usersSlice);
export default usersSlice.reducer;
