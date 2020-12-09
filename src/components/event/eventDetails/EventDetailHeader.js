import React from 'react'
import { Link } from 'react-router-dom';
import {Segment, Image, Item, Header, Button} from 'semantic-ui-react'
import {format} from 'date-fns'

const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

export default function EventDetailHeader({training}) {
    return (
        <Segment.Group>
            <Segment basic attached="top" style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${training.category}.jpg`} fluid style={eventImageStyle} />

                <Segment basic style={eventImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content={training.title}
                                    style={{color: 'white'}}
                                />
                                <p>{format(training.date, 'dd/MM/yyyy')}</p>
                                <p>
                                    Hosted by <strong>Bob</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>

            <Segment attached="bottom">
                <Button>Annuler ma participation</Button>
                <Button color="teal">PARTICIPER</Button>

                <Button as={Link} to={`/manage/${training.id}`} color="orange" floated="right">
                    Modifier
                </Button>
            </Segment>
        </Segment.Group>
    )
}
