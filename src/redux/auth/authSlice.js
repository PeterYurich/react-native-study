import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        nickname: null,
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase(authRegister.pending, (state, { payload }) => {
            state.isLoading = true
        })
        .addCase(authRegister.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.userId = payload.uid
        })
        .addCase(authRegister.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        })
})