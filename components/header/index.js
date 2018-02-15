import React from 'react';

import './header.css';
import Divider from '../divider';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="header-container" style={{backgroundImage:`url(${this.props.backgroundImage})`}}>
        <h1>{this.props.title}</h1>
        <Divider width="50%"></Divider>
        <h3 className="header-details">{this.props.details}</h3>
      </div>
    )
  }
}