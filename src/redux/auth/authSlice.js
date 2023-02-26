import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userId: null,
        nickname: null
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase((state, { payload }) => {
            state.userId = payload.id
            state.nickname = payload.name
        })
})