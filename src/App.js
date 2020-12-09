

import {useState} from 'react'
import { Container } from 'semantic-ui-react';
import EventDashborad from './components/event/eventDashboard/EventDashboard'
import NavBar from './components/nav/NavBar'
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventDetails from './components/event/eventDetails/EventDetails';
import EventForm from './components/event/EventForm';
import ModalManager from './components/common/modal/ModalManager';
import Sandbox from './sandBox/SandBox';

function App() {

  // const [openForm, setOpenForm] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState(null);

  /* const handleSelectedTraining = (training) => {
    setSelectedTraining(training)
    setOpenForm(true)
  }  */

  /* const handleCreateFormOpen = () => {
    setSelectedTraining(null)
    //setOpenForm(true)
  } */

  return (
    <>
      <ModalManager />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={'/(.+)'} render={() => (
          <>
          <NavBar />
          <Container className="main">
            {/* <EventDashborad openForm={openForm} setOpenForm={setOpenForm} onSelectTraining={handleSelectedTraining} selectedTraining={selectedTraining}/> */}
            <Switch>
              <Route exact path="/trainings" component={EventDashborad} />
              <Route path="/training/:id" component={EventDetails} />
              <Route path={['/CreateTraining', '/manage/:id']} component={EventForm} />
              <Route path="/sandbox" component={Sandbox} />
            </Switch>
          </Container>
          </>
        )} />
      </Switch>
      </>
  );
}

export default App;
