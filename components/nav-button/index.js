import React from 'react';
import {Link} from 'react-router-dom';

import './nav-button.css';

export default class NavButton extends React.Component {
  render() {
    return(
      <Link className="nav-button" to={this.props.route}><span className="nav-button-title">{this.props.title}</span></Link>
    )
  }
}