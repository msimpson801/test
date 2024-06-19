import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counterSlice";
import colourReducer from "./colourSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        colour: colourReducer
    },
})