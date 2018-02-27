import React from 'react';

import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import {navigationData} from '../../data';
import './hamburger-nav.less';


export default class HamburgerNav extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			menu_open: false
		};
	}
	handleNavClick = () => {
		this.setState({menu_open: false});
	}
	computeNavButtons = navigationData.map( (link, index) => {
		if (link.route) {
			return (
				<Link 
					key={index}
					to={link.route}
					onClick={() => {this.handleNavClick()}}>
					{link.title}
				</Link>
			);
		} else {
			return <a key={index} rel="externa" target="_self" href={link.redirectUrl}>{link.title}</a>
		}
	})

	render(){
		const navButtons = this.computeNavButtons;
		return(
			<Menu 
				isOpen={this.state.menu_open}
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