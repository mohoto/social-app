import React from 'react'
import { useDispatch } from 'react-redux'
import {Button, Menu} from 'semantic-ui-react'
import { openModal } from '../../reducers/modalReducer';

export default function SignedOutMenu() {

    const dispatch = useDispatch();

    return (
        <Menu.Item position="right">
            <Button basic inverted content="Se connecter" onClick={() => dispatch(openModal({modalType: 'LoginForm', modalProps: ''}))}></Button>
            <Button basic inverted content="S'enregistrer" style={{ marginLeft: '0.5rem'}}></Button>
        </Menu.Item>
    )
}
