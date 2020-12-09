import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer';
import modalReducer from '../reducers/modalReducer';
import trainingsReducer from '../reducers/trainingsReducer';

export const store = configureStore({
    reducer: {
        trainings: trainingsReducer,
        modals: modalReducer,
        auth: authReducer
    }
});