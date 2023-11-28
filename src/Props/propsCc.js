import React, { Component } from 'react'
import PropsCc2 from './propsCc2'

export default class PropsCc extends Component {
  render() {
    return (
      <div>
        <PropsCc2 text={'passed by parent to child component'}/>
      </div>
    )
  }
}
