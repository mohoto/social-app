import React, {useState} from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../eventList/EventList'

export default function EventDashboard() {

    //const [trainings, setTrainings] = useState(sampleData);


    const handleCreateTraining = (training) => {
        //setTrainings([...trainings, training])
    }

    const handleUpdatedTraining = (updatedTrain) => {
        //setTrainings(trainings.map(train => train.id === updatedTrain.id ? updatedTrain : train));
        //onSelectTraining(null);
    }

    const handleDeleteTraining = (deleteTrain) => {
        //setTrainings(trainings.filter(train => train.id !== deleteTrain.id))
    }


    return (
        <Grid>
            <Grid.Column mobile={16} tablet={16} computer={10}>
                <EventList />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={16} computer={6}>
                {/* {openForm && (
                    <EventForm 
                    createTraining={handleCreateTraining} 
                    selectedTraining={selectedTraining}
                    updatedTraining = {handleUpdatedTraining}
                    key={selectedTraining ? selectedTraining.id : null}
                    />
                )} */}
            </Grid.Column>
        </Grid>
    )
}
