import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default class UserItem extends Component {

    static userItemPropTypes = {
        user: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div className="card text-center">
                <img src={this.props.user.avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
                <h2>{this.props.user.login}</h2>
                <div>
                    <Link to={`user/${this.props.user.login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        )
    }
}
