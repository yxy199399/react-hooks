import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routers from './Router'
import './App.less'
export default class App extends Component {
  render() {
    // console.log(process.env)
    return (
      <div className="container">
        <Router>
          <div className="router-container">
            <Link className="nav" to="/">
              home
            </Link>
            <Link className="nav" to="/use-state">
              user-state
            </Link>
            <Link className="nav" to="/use-effect">
              user-effect
            </Link>
          </div>
          <div className="content-container">
            <Routers />
          </div>
        </Router>
      </div>
    )
  }
}
