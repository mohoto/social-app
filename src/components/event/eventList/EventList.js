import React from 'react'
import EventListItem from './EventListItem'
import {useSelector} from 'react-redux'
import { selectTrainings } from '../../../reducers/trainingsReducer'

export default function EventList() {

    const trainings = useSelector(selectTrainings);

    return (
        <>
        {trainings.map(training => (
            <EventListItem key={training.id} training={training} />
        ))}
        </>
    )
}
