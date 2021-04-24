import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../feattures/user/userSlice';
import movieReducer from '../feattures/movie/movieSlice';

export default configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
})


