"use strict"
import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/logo.jpeg'
import './search.less'
import { a } from './tree-shaking'

if (false) {
  a()
}
class Search extends React.Component{

  render() {
    return <div className="search-text">
       Search
      <img src= {logo}/>
    </div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)