import React from 'react';
import {connect} from 'react-redux'
import EventsContainer from './containers/EventsContainer'

class App extends React.Component {

  componentDidMount(){
    // fetch('http://localhost:3000/api/v1/events')
    // .then(response => response.json())
    // .then(data => console.log(data))
  }

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
