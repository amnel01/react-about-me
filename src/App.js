import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import WorkHistory from './WorkHistory'
import Projects from './Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/work-histories" component={WorkHistory}/>
            <Route path="/projects" component={Projects}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
