import React, { Component } from 'react';

import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'
import Message from './components/Message'
import Welcom from './components/Welcome'

class App extends Component {
  render() {
    return (
    <div className="App">
      
     <Message />

    </div>
  );
}
}

export default App;
