import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import {useDispatch} from 'react-redux'
import {deleteTraining} from '../../../reducers/trainingsReducer'
import { format } from 'date-fns'


/* function exampleReducer(state, action) {
    switch (action.type) {
      case 'close':
        return { open: false }
      case 'open':
        return { open: true, size: action.size }
      default:
        throw new Error('Unsupported action...')
    }
  } */

export default function EventListItem({training}) {

    const dispatch = useDispatch();
    
    return (
        <Segment.Group key={training.id}>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image circular size='tiny' src={training.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={training.title} />
                            <Item.Description>
                                Publié par {training.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment.Group horizontal>
                <Segment>
                        <Icon name="calendar" color="teal" />{format(training.date, 'dd/MM/yyyy')}    
                </Segment>
                <Segment>
                        <Icon name="clock" color="teal" />{format(training.time, 'h:mm')}     
                </Segment>
                <Segment>
                        <Icon name="clock" color="teal" />{training.duree}     
                </Segment>
            </Segment.Group>
            <Segment>
                    <Icon name="marker" />{training.city} - {training.venue}
                </Segment>
            <Segment>
                <List horizontal >
                    <h3>Participants:</h3>
                    {training.attendees?.map(attendee => (
                        <EventListAttendee attendee={attendee}/>
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{training.description}</div>
                <Button as={Link} to={`/training/${training.id}`} size="large" color="teal" floated="right" content="voir" />
                <Button size="large" negative floated="right" content="supprimer" onClick={() => dispatch(deleteTraining(training))}/>
            </Segment>
        </Segment.Group>
    )
}