import React, { Component } from 'react';
import './App.css';
import SeasonsDetail from './components/SeasonDetails';
import Progress from './components/ProgressBar';
import Error from './components/Error';

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
      position => this.setState({latitude: position.coords.latitude}),
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
      return <Error message={this.state.errorMessage}/>;
    }
    return <Progress message={`Please, accept allow location`}/>;
  }
}

export default App;
