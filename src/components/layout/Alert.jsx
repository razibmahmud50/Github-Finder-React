import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            this.props.alert !== null && (
            <div className={this.props.alert.type}>
                <p><i className="fas fa-info-circle"></i>{this.props.alert.msg}</p>
            </div>

            )
        )
    }
}
