import React from 'react';

import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import {navigationData} from '../../data';
import './hamburger-nav.less';


export default class HamburgerNav extends React.Component{

	computeNavButtons = navigationData.map( (link, index) => {
		if (link.route) {
			return <Link key={index} to={link.route}>{link.title}</Link>
		}
	})

	render(){
		const navButtons = this.computeNavButtons;
		return(
			<Menu 
				width={'100%'} 
				burgerButtonClassName={"burger-button"} 
				burgerBarClassName={"burger-bar"} 
				crossButtonClassName={"cross-button"}
				crossClassName={"cross"}
				menuClassName={"navigation-menu"}
				itemListClassName={"item-list"}>
				{navButtons}
			</Menu>
		);
	}
}