import React from 'react';

import './header.css';
import Divder from '../divider';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="header-container" style={{backgroundImage:`url(${this.props.backgroundImage})`}}>
          <h1>{this.props.title}</h1>
          <Divder></Divder>
          <h3 className="header-details">{this.props.details}</h3>
      </div>
    )
  }
}