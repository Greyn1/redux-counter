import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import authReducer from './authentication/authSlice';
import logger from "redux-logger";

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        auth : authReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})