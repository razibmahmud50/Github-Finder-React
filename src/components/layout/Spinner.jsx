import React, { Component, Fragment } from 'react'
import spinner from './spinner.gif'

export default class Spinner extends Component {
    render() {
        return (
            <Fragment>
                <img src={spinner} alt="Lodding ..." style={{width: '200px', margin: 'auto', display:'block'}}/>
            </Fragment>
        )
    }
}
