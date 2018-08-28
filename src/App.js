import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import WorkHistory from './WorkHistory'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/work-histories" component={WorkHistory}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
