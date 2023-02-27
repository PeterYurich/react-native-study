import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@app/firebaseConfig"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth(db)

export const authRegister = createAsyncThunk('user', async ({email, password},
    { rejectWithValue }) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log('user: ', user);
    } catch (error) {
        console.log('error', error);
        return rejectWithValue(error.message)
    }
})


export const authLogin = ({ email, password }) => async (dispatch, getState) => {
    try {
        const userEntered = await signInWithEmailAndPassword(auth, email, password)
        console.log('userEntered: ', userEntered);
    } catch (error) {
        console.log('error', error);
        console.log('error.message', error.message);
    }
}

export const authLogout = () => async (dispatch, getState) => { }