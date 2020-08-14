import React from 'react';
import EventsContainer from './containers/EventsContainer'
import NavBar from './components/NavBar'

const App = () => {
    return (
      <div className="App">
        <NavBar />
        <EventsContainer />
      </div>
    )
}

export default App;