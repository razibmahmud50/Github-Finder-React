import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
   state={
       text: ""
   }
   static propTypes ={
       searchUsers: PropTypes.func.isRequired,
       clearUsers: PropTypes.func.isRequired,
       showClearBtn: PropTypes.bool.isRequired,
       setAlert: PropTypes.func.isRequired
   }

   onChange = (e)=> {
      this.setState({
         [e.target.name] : e.target.value
      })
   }
   onSubmit = (e) =>{
       e.preventDefault()
       if (this.state.text==="") {
            this.props.setAlert('Please Enter Something', 'alert-light');
       }else{
           this.props.searchUsers(this.state.text);
           this.setState({text : ""});
       }
   }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search User" onChange={this.onChange} value={this.state.text}/>
                    <input type="submit" className="btn btn-dark btn-block"/>
                </form>
                 {
                    this.props.showClearBtn && ( 
                    <button className="btn btn-danger btn-block" onClick={this.props.clearUsers}>Clear</button>)
                  } 
            </div>
        )
    }
}
