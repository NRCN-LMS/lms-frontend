import { combineReducers } from '@reduxjs/toolkit'
import { authApi } from '@/features/api/authApi';
import authReducer from '../features/authSlices';

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    auth:authReducer
});

export default rootReducer;