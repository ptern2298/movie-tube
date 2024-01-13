import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// import other reducers as needed

const rootReducer = combineReducers({
    user: userReducer,
    // add other slices as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;