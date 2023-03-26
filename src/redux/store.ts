import { configureStore } from "@reduxjs/toolkit";
import comments from './comments/slice'

const store = configureStore({
    reducer:{
        comments,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;