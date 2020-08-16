import React from 'react';
import EventsContainer from './containers/EventsContainer'
import NavBar from './components/NavBar'

const App = () => {
    return (
      <div>
        <NavBar />
        <div className="ui placeholder segment">
          <h1 className="ui centered header huge">AMMO</h1>
        </div>
        
        <EventsContainer />
      </div>
    )
}

export default App;