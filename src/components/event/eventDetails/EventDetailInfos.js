import React from 'react'
import {Segment, Grid, Icon, Button} from 'semantic-ui-react'
import {format} from 'date-fns'

export default function EventDetailInfos({training}) {
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
                        <span>{training.venue}</span>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color="teal" size="tiny" content="Voir la carte"/>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
}
