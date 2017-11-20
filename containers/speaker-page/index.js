import React from 'react';

import './speaker-page.css';
import Speaker from '../../components/speaker';

const mockSpeakers = [
	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/220px-Elon_Musk_2015.jpg',
		name: 'Elon Musk',
		info: 'SpaceX Founder Tesla Founder',
		paragraphs: [
			'Elon Reeve Musk (/ˈiːlɒn ˈmʌsk/; born June 28, 1971) is a South African-born Canadian American business magnate, investor,[9][10] engineer,[11] and inventor.[16] He is the founder, CEO, and CTO of SpaceX; a co-founder,[17] Series A investor, CEO, and product architect of Tesla Inc.; co-chairman of OpenAI; and founder and CEO of Neuralink. Musk is also a co-founder and former chairman of SolarCity, co-founder of Zip2, and founder of X.com, which merged with Confinity and took the name PayPal.[22]',
			'Musk has stated that the goals of SolarCity, Tesla, and SpaceX revolve around his vision to change the world and humanity.[25] His goals include reducing global warming through sustainable energy production and consumption, and reducing the "risk of human extinction" by "making life multiplanetary"[26][27] by establishing a human colony on Mars.'
		]
	},
	{
		img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/220px-Mark_Zuckerberg_em_setembro_de_2014.jpg',
		name: 'Mark Zuckerberg',
		info: 'Facebook Founder',
		paragraphs: [
			'Mark Elliot Zuckerberg (/ˈzʌkərbɜːrɡ/; born May 14, 1984) is an American computer programmer and Internet entrepreneur. He is a co-founder of Facebook, and currently operates as its chairman and chief executive officer.[4][5] His net worth is estimated to be US $74.2 billion as of November 2017, and in 2016 was ranked by Forbes as the fifth richest person in the world.[3][6]',
			'Zuckerberg launched Facebook from his Harvard University dormitory room on February 4, 2004. He was assisted by his college roommates and fellow Harvard students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.[7] The group then introduced Facebook to other college campuses. Facebook expanded rapidly, reaching one billion users by 2012. Meanwhile, Zuckerberg was involved in various legal disputes brought by others in the group, who claimed a share of the company based upon their involvement during the development phase of Facebook.[8]Zuckerberg launched Facebook from his Harvard University dormitory room on February 4, 2004. He was assisted by his college roommates and fellow Harvard students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.[7] The group then introduced Facebook to other college campuses. Facebook expanded rapidly, reaching one billion users by 2012. Meanwhile, Zuckerberg was involved in various legal disputes brought by others in the group, who claimed a share of the company based upon their involvement during the development phase of Facebook.[8]'
		]
	}
];

export default class SpeakerPage extends React.Component {

	computeSpeakers = mockSpeakers.map( (speaker, index) => {
		return <Speaker 
			key={index}
			img={speaker.img}
			name={speaker.name}
			info={speaker.info}
			paragraphs={speaker.paragraphs}
			index={index}
		>
		</Speaker>
	});

	render() {
		return(
			<div className="container">
				{this.computeSpeakers}
			</div>
		)
	}
}