import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavSite extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/work-histories">Work History</Link>
            </nav>
        );
    }
}

export default NavSite