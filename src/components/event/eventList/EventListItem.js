import React from 'react'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

export default function EventListItem({event}) {
    return (
        <Segment.Group key={event.id}>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image circular size='tiny' src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Publié par {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" />{event.date}
                    <Icon name="marker" />{event.city} - {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal >
                    {event.attendees.map(attendee => (
                        <EventListAttendee attendee={attendee}/>
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button size="large" positive floated="right" content="voir" />
            </Segment>
        </Segment.Group>
    )
}