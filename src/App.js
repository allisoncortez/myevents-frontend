import React from 'react';
import {connect} from 'react-redux'
import { fetchEvents } from './actions/fetchEvents';

class App extends React.Component {

  componentDidMount(){
    // fetch('http://localhost:3000/api/v1/events')
    // .then(response => response.json())
    // .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// //gives us access to whats currently in the store
// const mapStateToProps = (state) => {
//   return
// }

export default connect(null, {fetchEvents})(App);
//connect expects an immediate return from fetchEvents(actioncreator).
// That's why we use thunk. it lets us call dispatch from inside the action creator
