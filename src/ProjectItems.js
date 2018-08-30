import React, { Component } from 'react'

class ProjectItem extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.projName}</h2>
                <h3>{this.props.projDates}</h3>
                <div>{this.props.projDesc}</div>
                <img src={this.props.projImage}></img>
            </div>
        )
    }
}

export default ProjectItem