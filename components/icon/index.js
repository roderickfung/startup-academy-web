import React from 'react';

import './icon.css';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="icon-container">
        <img src={this.props.img}></img>
        <p className="icon-info">{this.props.info}</p>
      </div>
    )
  }
}