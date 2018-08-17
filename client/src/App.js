import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dad Jokes</h1>
        </header>
        <Route path="/login" component={Login}></Route>
      </div>
    );
  }
}

export default App;
