import React, { Component } from 'react'

class WorkHistoryItem extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.company}</h2>
                <p>{this.props.role}<span>{this.props.dates}</span></p>
                <ul>
                    <li>{this.props.duties1}</li>
                    <li>{this.props.duties2}</li>
                    <li>{this.props.duties3}</li>
                </ul>
            </div>
        )
    }
}

export default WorkHistoryItem