import { createSlice } from '@reduxjs/toolkit'
import { authRegister, authLogin } from './authOperations'


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        nickname: null,
        email: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase(authRegister.pending, (state) => {
            state.isLoading = true
        })
        .addCase(authRegister.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.userId = payload.uid
            state.email = payload.email
        })
        .addCase(authRegister.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        })
        .addCase(authLogin.pending, (state) => {
            state.isLoading = true
        })
        .addCase(authLogin.fulfilled, (state, { payload }) => {
            const asdf = JSON.parse(payload)
            state.email = asdf.email
            state.isLoading = false
            state.userId = asdf.uid
        })
        .addCase(authLogin.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        })
})