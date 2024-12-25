import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlices.js'

export const appStore = configureStore({
    reducer:{
      auth:authReducer,
      
    }
})