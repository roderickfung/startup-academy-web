import React from 'react';

import './email-subscription-form.less';

export default class EmailSubscriptionForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id="email-subscription-form">
				<h4>Never Miss a Beat!</h4>
				<p>some lorem ipsum stuff here</p>
				<form>
					<section>
						<input type="text" name="firstname" placeholder="First Name"></input>
						<input type="text" name="lastname" placeholder="Last Name"></input>
					</section>
					<section>
						<input type="text" name="email" placeholder="Email"></input>
						<input type="submit" value="subscribe"></input>
					</section>
				</form>
			</div>
		)
	}
}