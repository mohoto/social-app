import React from 'react'
import { Image, List } from 'semantic-ui-react'

export default function EventListAttendee({attendee}) {
    return (
        <List.Item key={attendee.id}>
            <Image circular size="mini" src={attendee.photoURL} />
        </List.Item>
    )
}
