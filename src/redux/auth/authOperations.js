import { db, auth } from "@app/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";

export const authRegister = ({ email, password }) => async (
    dispatch, getState) => {
    console.log('email, password: ', email, password);
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log('user: ', user);
    } catch (error) {
        console.log('error', error);
        console.log('error.message', error.message);
    }
}


export const authLogin = () => async (dispatch, getState) => { }

export const authLogout = () => async (dispatch, getState) => { }