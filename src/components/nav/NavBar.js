import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Link, useHistory } from 'react-router-dom'
import {Button, Container, Menu} from 'semantic-ui-react'
import { selectAuth } from '../../reducers/authReducer'
import './NavBar.css'
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

export default function NavBar() {

    const {authenticated} = useSelector(selectAuth);

    return (
        <Menu inverted fixed="top" stackable>
            <Container>
                <Menu.Item as={NavLink} exact to="/" header>
                    <img src="/assets/logo.png" alt="logo app" style={{ marginRight: '15px'}} />
                    Re-vents
                </Menu.Item >
                <Menu.Item as={NavLink} to="/trainings" name="Entrainements" />
                <Menu.Item as={NavLink} to="/sandbox" name="SandBox" />
                {authenticated && (
                    <Menu.Item as={Link} to="/createTraining">
                        <Button inverted circular color="teal" content="Créer un évènement"></Button>
                    </Menu.Item>
                )}
                {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
            </Container>
        </Menu>
    )
}
