import { configureStore } from '@reduxjs/toolkit';
import navReducer from "./slice/navSlice";


export default configureStore({
    reducer: {
        nav: navReducer
    },
})