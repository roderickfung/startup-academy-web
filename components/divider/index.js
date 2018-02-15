import React from 'react';

import './divider.css';

export default class Divider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style:{
        width: this.props.width,
        padding: this.props.padding,
        backgroundColor: this.props.color,
        marginLeft: this.props.left
      }
    }
  }
  render() {
    const style = this.state.style;
    return(
      <hr className="custom-divider" style={style}></hr>
    )
  }
}