import React, { Component } from 'react'
import logo from './logo.svg'
import "./App.css"
import NavSite from './NavSite'

class WorkHistory extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Work History</h1>
          <NavSite/>
        </header>
    
      </div>
    );
  }
}

export default WorkHistory