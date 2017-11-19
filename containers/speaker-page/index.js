import {React, Component} from 'react';

import Speaker from '../../components/speaker';

const mockSpeakers = [
	{
		img: 'https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwinqNPvpsnXAhURx2MKHdRmC44QjRwIBw&url=https%3A%2F%2Ftwitter.com%2Felonmusk%2Fstatus%2F902039243601485824&psig=AOvVaw2FlTNJSt4ZuftcS7oUvhEl&ust=1511135041206931', 
		name: 'Elon Musk',
		info: 'SpaceX Founder Tesla Founder',
		paragraphs: [
			'Elon Reeve Musk (/ˈiːlɒn ˈmʌsk/; born June 28, 1971) is a South African-born Canadian American business magnate, investor,[9][10] engineer,[11] and inventor.[16] He is the founder, CEO, and CTO of SpaceX; a co-founder,[17] Series A investor, CEO, and product architect of Tesla Inc.; co-chairman of OpenAI; and founder and CEO of Neuralink. Musk is also a co-founder and former chairman of SolarCity, co-founder of Zip2, and founder of X.com, which merged with Confinity and took the name PayPal.[22]',
			'Musk has stated that the goals of SolarCity, Tesla, and SpaceX revolve around his vision to change the world and humanity.[25] His goals include reducing global warming through sustainable energy production and consumption, and reducing the "risk of human extinction" by "making life multiplanetary"[26][27] by establishing a human colony on Mars.'
		]
	}
];

export default class SpeakerPage extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {

	// 	}
	// }
	render() {
		const speakers = mockSpeakers.map( (speaker, index) => {
			<Speaker 
				img={speaker.img}
				name={speaker.name}
				info={speaker.info}
				paragraphs={speaker.paragraphs}
				index={index}
			>
			</Speaker>
		});
		return(
			<div>
				{speakers}
			</div>
		)
	}
}