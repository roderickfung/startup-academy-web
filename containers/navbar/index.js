import React from 'react';

// import Logo from '../../components/logo';
import './navbar.css';
import {navigationData} from '../../data';
import NavButton from '../../components/nav-button';

export default class Navbar extends React.Component{
  constructor(props) {
    super(props)
  }

  computeNavButtons = navigationData.map( (link, index) => {
    return <NavButton key={index} title={link.title} route={link.route}></NavButton>
  })

  render() {
    return(
      <div id="navbar-container">
        <div className="logo">LOGO</div>
        {this.computeNavButtons}
      </div>
    )
  }
}