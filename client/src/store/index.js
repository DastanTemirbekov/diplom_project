import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import preloaderReducer from './slices/preloaderSlice'
import testReducer from './slices/testSlice'


export const store = configureStore({
    reducer: {
        userReducer,
        preloaderReducer,
        testReducer,
    }
})