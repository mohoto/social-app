import React from 'react'
import {Segment, Item} from 'semantic-ui-react'

export default function EventDetailSideBar({attendees}) {
    return (
        <>
            <Segment
                textAlign="center"
                style={{border: 'none'}}
                attached="top"
                secondary
                inverted
                color="teal"
            >
                {attendees ? attendees.length : 'Aucun' } {!attendees || attendees.length < 1 ? 'participant' : 'participants'}
            </Segment>
            <Segment attached>
                <Item.Group relaxed divided>
                        {attendees?.map(attendee => (
                        <Item key={attendee.id} style={{position: 'relative'}}>
                            <Item.Image size="tiny" src={attendee.photoURL || '/assets/user.png'}/>
                            <Item.Content verticalAlign="middle">
                                <Item.Header as="h3">
                                    <span>{attendee.name}</span>
                                </Item.Header>
                            </Item.Content>
                        </Item>
                        ))}
                </Item.Group>
            </Segment>
        </>
    )
}
