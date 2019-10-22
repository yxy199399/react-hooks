import React, { Component } from 'react'
import Icon from './assets/book.png'
import './App.less'
export default class App extends Component {
  render() {
    // console.log(process.env)
    return (
      <div>
        <img src={Icon} />
        <p className="p">hello react</p>
      </div>
    )
  }
}
