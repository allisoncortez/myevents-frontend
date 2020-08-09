import React from 'react';

class App extends React.Component {

  // testing fetch
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/events')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
