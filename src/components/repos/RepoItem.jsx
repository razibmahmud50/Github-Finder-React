import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RepoItem extends Component {

    static propTypes = {
        repo: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="card">
                <h3>
                  <a href={this.props.repo.html_url}>{this.props.repo.name}</a>
                </h3>
                
            </div>
        )
    }
}
