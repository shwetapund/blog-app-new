import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CurrentUser : null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) =>{
            state.loading = true;
            state.error = null;
        },
        SignInSuccess : (state, action) =>{
            state.CurrentUser = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
        SignInFailure: (state, action) =>{
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { signInStart, SignInFailure, SignInSuccess} = userSlice.actions;

export default userSlice.reducer;