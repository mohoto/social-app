import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { selectTrainings } from '../reducers/trainingsReducer';
import {openModal} from '../reducers/modalReducer'


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
    </>
  );
}