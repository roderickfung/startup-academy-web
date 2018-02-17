import React from 'react';
import {Link} from 'react-router-dom';

import './nav-button.css';

export default class NavButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false
    }
  }

  setHoverTrue = () => {
    this.setState({isHovered:true});
  }

  setHoverFalse = () => {
    this.setState({isHovered:false});
  }

  computeButton() {
    if (this.props.route) {
      return (
        <Link className="nav-button" to={this.props.route} onMouseEnter={this.setHoverTrue} onMouseLeave={this.setHoverFalse}>
          <span className="nav-button-title">{this.props.title}</span>
          <span className={this.state.isHovered ? "nav-button-underline" : ""}></span>
        </Link>
      )
    } else {
      return (
        <a className="nav-button" rel="external" target="_self" href={this.props.redirectUrl} onMouseEnter={this.setHoverTrue} onMouseLeave={this.setHoverFalse}>
          <span className="nav-button-title">{this.props.title}</span>
          <span className={this.state.isHovered ? "nav-button-underline" : ""}></span>
        </a>
      )
    }
  }
  render() {
    return(
      this.computeButton()
    );
  }
}