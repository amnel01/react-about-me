import React, { Component } from 'react'
import "./App.css"
import NavSite from './NavSite'
import ProjectItem from './ProjectItems'

class Projects extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>About Me - Projects</h1>
          <NavSite/>
        </header>
        <body className="projects">
            <ProjectItem 
            projName="About Me Project"
            projDates="August-Oct 2018"
            projDesc="I am building a cool about me/portfolio website"
            projImage="https://images.unsplash.com/photo-1535515384173-d74166f26820?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a39ab809fc1849faefb2ab12ca351748&auto=format&fit=crop&w=2250&q=80"
            />
        </body>
      </div>
    );
  }
}

export default Projects