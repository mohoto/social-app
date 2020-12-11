import {createSlice} from '@reduxjs/toolkit'

const mapSlice = createSlice({
    name: 'map',
    initialState: {
        city: {
            address: '',
            latLng: null
        }
    },
    reducers: {
        setMap : (state, action) => {
        
            state.city.address = action.payload.address;
            state.city.latLng = action.payload.latLng;
        }
    }

});

export const {setMap} = mapSlice.actions;
export const selectMap = state => state.map;
export const mapReducer = mapSlice.reducer;

export default mapReducer;