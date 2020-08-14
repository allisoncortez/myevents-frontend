import React from 'react';
import EventsContainer from './containers/EventsContainer'
import NavBar from './components/NavBar'

const App = () => {
    return (
      <div className="ui container">
        <NavBar />
        {/* intro block here */}
        <EventsContainer />
      </div>
    )
}

export default App;