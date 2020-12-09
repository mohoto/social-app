import React from 'react'
import {Dropdown, Image, Menu} from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectAuth } from '../../reducers/authReducer';

export default function SignedInMenu() {

    const dispatch = useDispatch();
    const {currentUser} = useSelector(selectAuth);
    const history = useHistory();

    return (
        <Menu.Item position="right">
            <Image avatar src="/assets/user.png" />
            <Dropdown pointing="top right" text={currentUser.email}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createTraining" text="Créer un évènement" icon="plus"/>
                    <Dropdown.Item  text="Mon profil" icon="user"/>
                    <Dropdown.Item 
                     text="Déconnexion" 
                     icon="power" 
                     onClick={() => {
                         dispatch(logOut());
                         history.push('./');
                        }
                     }
                     />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}
