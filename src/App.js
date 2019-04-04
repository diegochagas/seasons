import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      latitude: null,
      errorMessage: ''
    }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({latitude: position.coords.latitude})
      }, error => {
        this.setState({errorMessage: error.message})
      }
    );
  }

  render() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <div>Latitude: {this.state.latitude}</div>;
    }
    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <progress></progress>;
  }
}

export default App;
