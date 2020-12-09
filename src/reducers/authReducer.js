import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: true,
        currentUser: {
            email: 'bob@gmail.com'
        }
    },
    reducers: {
        logIn : (state, action) => {
            state.authenticated = action.payload.authenticated;
            state.currentUser = action.payload.currentUser;
        },
        logOut : (state) => {
            state.authenticated = false;
            //state.currentUser = null
        }
    }

});

export const {logIn, logOut} = authSlice.actions;
export const selectAuth = state => state.auth;
export const authReducer = authSlice.reducer;

export default authReducer;