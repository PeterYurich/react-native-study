import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@app/firebaseConfig"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth(db)

export const authRegister = createAsyncThunk('register',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            return user
        } catch (error) {
            console.log('error', error.message);
            return rejectWithValue(error)
        }
    })


export const authLogin = createAsyncThunk('login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            const asdf = JSON.stringify(user)
            return asdf
        } catch (error) {
            console.log('error', error.message);
            return rejectWithValue(error)
        }
    })
// ({ email, password }) => async (dispatch, getState) => {
//     try {
//         const { } = await signInWithEmailAndPassword(auth, email, password)
//     } catch (error) {
//         console.log('error', error);
//         console.log('error.message', error.message);
//     }
// }

export const authLogout = () => async (dispatch, getState) => { }