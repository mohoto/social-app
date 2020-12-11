import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { selectTrainings } from '../reducers/trainingsReducer';
import {openModal} from '../reducers/modalReducer'
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';
import { setMap } from '../reducers/mapReducer';


export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector(selectTrainings);

  const dataModal = "Moho";

  return (
    <>
      <h1>Testing 123</h1>
      
      <Button
        color="teal"
        content="Open Modal"
        onClick={() => dispatch(openModal({modalType: 'TestModal', modalProps:"Moho"}))}
      />
      <Button
        color="teal"
        content="Dispatch latLng"
        onClick={() => dispatch(setMap ({
          address: "Paris", 
          latLng: {
            lat: 51.5118074,
            lng: -0.12300089999996544
          }
        }))}
      />
      <div style={{marginTop: 15}}>
        <TestPlaceInput />
      </div>
      <TestMap />
    </>
  );
}