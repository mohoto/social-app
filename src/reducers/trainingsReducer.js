import {createSlice} from '@reduxjs/toolkit'
import { sampleData } from '../api/data';

const trainingsSlice = createSlice({
    name: 'trainings',
    initialState: {
        trainings: sampleData
    },
    reducers: {
        createTraining : (state, action) => {
            state.trainings = [...state.trainings, action.payload]
        },
        updateTraining : (state, action) => {
            state.trainings =  [...state.trainings.filter(train => train.id !== action.payload.id), action.payload]
        },
        deleteTraining : (state, action) => {
            state.trainings = [...state.trainings.filter(train => train.id !== action.payload.id)]
        }
    }

});

export const {createTraining, updateTraining, deleteTraining} = trainingsSlice.actions;
export const selectTrainings = state => state.trainings.trainings
export const trainingsReducer = trainingsSlice.reducer;

export default trainingsReducer;