import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default class Navbar extends Component {

    static defaultProps ={
        title: "Github Finder"
    };

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className="fab fa-github mr-2"></i>
                    {this.props.title}
                </h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        )
    }
}

