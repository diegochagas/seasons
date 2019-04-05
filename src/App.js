import React, { Component } from 'react';
import './App.css';
import SeasonsDetail from './SeasonsDetail';
import Progress from './Progress';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      latitude: null,
      errorMessage: ''
    }
  }
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.latitude}),
      error => this.setState({errorMessage: error.message})
    );
  }
  
  render() {
    return (
      <div className="App">
        {this.chooseComponent()}
      </div>
    );
  }

  chooseComponent() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonsDetail latitude={this.state.latitude}/>;
    }
    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Progress message={`Please, accept allow location`}/>;
  }
}


export default App;
