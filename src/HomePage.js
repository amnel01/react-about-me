import React, { Component } from 'react'
import logo from './logo.svg'
import "./App.css"
import NavSite from './NavSite'

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About Andy</h1>
          <NavSite/>
        </header>

        <section>
          {/* <img src="./image1.png"></img> */}
          <p>My name is Andy Nelson. I am currently in a coding bootcamp called Helio Training for the next several months. I'm very excited about what I am learning</p>
        </section>
        
        <section>
          <h4>I am attending Helio Training because:</h4>
          <ul>
            <li>It's been a goal of mine to learn more about full stack dev</li>
            <li>I wish to leverage this knowledge in my current job at work to do awesome things!</li>
            <li>I want to have more knowledge/skills to recognize and pursue future opportunities with other companies or entrepreneurial ventures</li>
          </ul>
        </section>
        <section>
          <h3>My current interests:</h3>
          <ul>
            <li>Strength Training</li>
            <li>Quadcopters</li>
            <li>Coding/Projects</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default HomePage;