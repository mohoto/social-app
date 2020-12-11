import React, { useState } from 'react'
import {Segment, Grid, Icon, Button} from 'semantic-ui-react'
import {format} from 'date-fns'
import { useDispatch } from 'react-redux'
import { setMap } from '../../../reducers/mapReducer';
import EventDetailMap from './EventDetailMap';

export default function EventDetailInfos({training}) {

    const dispatch = useDispatch();
    const [mapOpen, setMapOpen] = useState(false);

    return (
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="info"/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{training.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="calendar" size="large" color="teal"/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>{format(training.date, 'dd/MM/yyyy')}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="marker" size="large" color="teal"/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{training.venue.address}</span>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color="teal" size="tiny" content={!mapOpen ? "Voir la carte" : "cacher la carte"} onClick={() => setMapOpen(!mapOpen)}/>
                    </Grid.Column>
                </Grid>
            </Segment>
            {mapOpen && (
                <EventDetailMap latLng={training.city.latLng} />
            )}
        </Segment.Group>
    )
}
