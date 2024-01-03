import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1 style={{marginTop:"5em"}}>Quiz App</h1>
        <Link to='/quiz'>
        <button>Play</button>
        </Link>
      </div>
    )
  }
}
