import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from './comments/slice'

const store = configureStore({
    reducer: commentsReducer
})

export default store