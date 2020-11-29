import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../eventList/EventList'
import EventForm from '../EventForm'
import {sampleData} from '../../../api/data'

export default function EventDashboard({openForm, setOpenForm}) {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={sampleData}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {openForm && (
                    <EventForm setOpenForm={setOpenForm}/>
                )}
            </Grid.Column>
        </Grid>
    )
}
