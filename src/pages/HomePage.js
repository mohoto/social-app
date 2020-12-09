import React from 'react'
import {Segment, Container, Header, Image, Button, Icon} from 'semantic-ui-react'
import './HomePage.css'

export default function HomePage({history}) {
    return (
        <Segment textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' style={{marginBottom: 12}} />
                    Re-vents
                </Header>
                <Button onClick={() => history.push('/trainings')} size='huge' inverted>
                    Get started
                    <Icon name='right arrow' inverted />
                </Button>
            </Container>
        </Segment>
    )
}
