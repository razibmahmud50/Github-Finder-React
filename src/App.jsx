import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = {
    users: [],
    user:{},
    repos: [],
    loading: false,
    alert: null
  }

  async componentDidMount() {

    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/users?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`)

    this.setState({ users: res.data, loading: false })
  }

  // search github user
  searchUsers = async (text) => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`)

    this.setState({ users: res.data.items, loading: false })
  }
  //get single user
  getUser = async (username) =>{
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/users/${username}?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`)

    this.setState({ user: res.data, loading: false })
  }
  //get user repos
  getUserRepos = async (username) =>{
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`)

    this.setState({ repos: res.data, loading: false })
  }
  clearUsers = () => {
    this.setState({ users: [] })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 2000);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert
              alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClearBtn={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={this.state.loading} users={this.state.users} />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props =>(
                <User {...props} getUserRepos={this.getUserRepos} repos={this.state.repos} getUser={this.getUser} user={this.state.user} loading={this.state.loading}/>
              )}/>
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}
