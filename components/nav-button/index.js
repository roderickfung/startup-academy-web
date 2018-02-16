import React from 'react';
import {Link} from 'react-router-dom';

import './nav-button.css';

export default class NavButton extends React.Component {
  computeButton() {
    if (this.props.route) {
      return <Link className="nav-button" to={this.props.route}><span className="nav-button-title">{this.props.title}</span></Link>
    } else {
      console.log(this.props)
      return <a className="nav-button" rel="external" target="_self" href={this.props.redirectUrl}><span className="nav-button-title">{this.props.title}</span></a>
    }
  }
  render() {
    return(
      this.computeButton()
    );
  }
}