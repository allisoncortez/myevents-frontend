import React from 'react';
import EventsContainer from './containers/EventsContainer'
import NavBar from './components/NavBar'

const App = () => {
    return (
      <div style={{ marginTop: '10px'}}>
        <NavBar />
        <EventsContainer />
      </div>
    )
}

export default App;