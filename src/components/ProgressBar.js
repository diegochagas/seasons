import React from 'react';
import './ProgressBar.css';

export default class ProgressBar extends React.Component {
  render(){
    return (
      <div className="progress-bar">
        <progress></progress>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  message: 'Loading...'
}