import React, { Component } from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types'

export default class Repos extends Component {

    static propTypes = {
       repos: PropTypes.array.isRequired
    }
    render() {
        return this.props.repos.map(repo=><RepoItem repo={repo} key={repo.id}/>)
    }
}
