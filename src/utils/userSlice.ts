import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './rootReduser';

interface User {
    email: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null as User | null,
    },
    reducers: {
        SignIn: (state, action) => {
            state.user = action.payload;
        },
        SignOut: (state) => {
            state.user = null;
        },
    },
});

export const { SignIn, SignOut } = userSlice.actions;

export const selectUser = (state: RootState): User | null => state.user.user;

export default userSlice.reducer;
