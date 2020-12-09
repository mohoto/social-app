import React from 'react'
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfos from './EventDetailInfos'
import EvenDetailChat from './EventDetailChat'
import EventDetailSideBar from './EventDetailSideBar'
import { Grid } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { selectTrainings } from '../../../reducers/trainingsReducer'

export default function EventDetails({match}) {

    const training = useSelector(selectTrainings).find(e => e.id === match.params.id);

    return (
        <Grid>
            <Grid.Column mobile={16} tablet={8} computer={10}>
                <EventDetailHeader training={training}/>
                <EventDetailInfos training={training}/>
                <EvenDetailChat />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={6}>
                <EventDetailSideBar attendees={training.attendees}/>
            </Grid.Column>
        </Grid>
    )
}
