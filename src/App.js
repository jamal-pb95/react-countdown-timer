import React, { Component } from 'react';
import './App.css';
import TimerInput from './components/TimerInput';
import Timer from './components/Timer';
import StartButton from './components/StartButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: ''
    }
  }

  // bind the method to the constructor
  handleChange = this.handleChange.bind(this);
  handleChange(event) {
    this.setState({
      minutes: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <TimerInput minutes ={this.state.minutes} handleChange={this.handleChange} />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <StartButton />
      </div>
    );
  }
}

export default App;
