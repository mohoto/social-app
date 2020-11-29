import React, {useState} from 'react'
import {Button, Container, Menu} from 'semantic-ui-react'
import './NavBar.css'

export default function NavBar({setOpenForm}) {

    const [activeItem, setActiveItem]=useState()

    const handleItemClick = event => {

    }

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo app" style={{ marginRight: '15px'}} />
                    Re-vents
                </Menu.Item>
                <Menu.Item name="Evènements" />
                <Menu.Item>
                    <Button positive inverted circular content="Créer un évènement" onClick={() => setOpenForm(true)}></Button>
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content="Se connecter"></Button>
                    <Button basic inverted content="S'enregistrer" style={{ marginLeft: '0.5rem'}}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}
