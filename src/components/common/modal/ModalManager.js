import React from 'react'
import { useSelector } from 'react-redux';
import LoginForm from '../../../auth/LoginForm';
import {selectModal} from '../../../reducers/modalReducer'
import TestModal from '../../../sandBox/TestModal'

export default function ModalManager() {

    const modalLookup = {
        TestModal,
        LoginForm
        
    }; 
    const currentModal = useSelector(selectModal);
    let renderedModal;
    if (currentModal) {
        const { modalType, modalProps } = currentModal;
        const ModalComponent = modalLookup[modalType];
        renderedModal = <ModalComponent {...modalProps} />;
    }

    return (
        <span>{renderedModal}</span>
    )
}
