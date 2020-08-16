import React from 'react';
import EventsContainer from './containers/EventsContainer'
import NavBar from './components/NavBar'
import Header from './components/Header'

const App = () => {
    return (
      <div>
        <NavBar />
        <EventsContainer />
      </div>
    )
}

export default App;