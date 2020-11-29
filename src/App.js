

import {useState} from 'react'
import { Container } from 'semantic-ui-react';
import EventDashborad from './components/event/eventDashboard/EventDashboard'
import NavBar from './components/nav/NavBar'

function App() {

  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="App">
      <NavBar setOpenForm={setOpenForm}/>
      <Container className="main">
        <EventDashborad openForm={openForm} setOpenForm={setOpenForm}/>
      </Container>
    </div>
  );
}

export default App;
