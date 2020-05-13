import React, { Component, Fragment } from 'react';
import Repos from '../repos/Repos'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


export default class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }
    static propTypes={
        loading: PropTypes.bool.isRequired,
        getUser: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
        user: PropTypes.object.isRequired,
        getUserRepos: PropTypes.func.isRequired
    }
    render() {
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;
        const {loading} = this.props
        if(loading){
            return <Spinner/>
        }
        return (
            <Fragment>
                <Link to="/" className="btn btn-light">Back To Home</Link>
                Hireable:{}
                {hireable?(
                    <i className="fas fa-check text-success"></i>
                ):(
                    <i className="fas fa-times-circle text-danger"></i>
                )}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt="" style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>{location}</p>
                    </div>
                    <div>
                      {bio && <Fragment>
                       <h3>Bio</h3>
                      <p>{bio}</p>
                      <a href={html_url} className="btn btn-dark my-1">View Github profile</a>
                      <ul>
                      <li>{login && <Fragment>
                      <strong>Username:</strong>{login}</Fragment>}
                      </li>
                      <li>{company && <Fragment>
                      <strong>Company:</strong>{company}</Fragment>}
                      </li>
                      <li>{blog && <Fragment>
                      <strong>Website:</strong>{blog}</Fragment>}
                      </li>
                      </ul>
                      </Fragment>}
                    </div>
                </div>
                <div className="card text-center">
                      <div className="badge badge-primary">Followers: {followers}</div>
                      <div className="badge badge-success">Following: {following}</div>
                      <div className="badge badge-danger">Public Repos:{public_repos}</div>
                      <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
                <Repos repos={this.props.repos}/>
            </Fragment>
        )
    }
}
