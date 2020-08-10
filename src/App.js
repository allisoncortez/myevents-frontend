import React from 'react';
import EventsContainer from './containers/EventsContainer'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <EventsContainer />
      </div>
    );
  }
}

// //gives us access to whats currently in the store
// const mapStateToProps = (state) => {
//   return
// }

export default App;
//connect expects an immediate return from fetchEvents(actioncreator).
// That's why we use thunk. it lets us call dispatch from inside the action creator
