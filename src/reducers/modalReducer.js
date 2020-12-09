import {createSlice} from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modals',
    initialState: {
        modal: null
    },
    reducers: {
        openModal : (state, action) => {
            /*const {modalType, modalProps} = action.payload;
            return {modalType, modalProps};*/
            state.modal = action.payload;
        },
        closeModal : (state) => {
            state.modal =  null
        }
    }

});

export const {openModal, closeModal} = modalSlice.actions;
export const selectModal = state => state.modals.modal
export const modalReducer = modalSlice.reducer;

export default modalReducer;