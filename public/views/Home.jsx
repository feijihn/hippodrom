import React from 'react';
import Content from './Content.jsx';
import styles from '../styles/InlineStyles.js';
import Events from './Events.jsx';

var data = {
	EventsData: [
		{
			img: '../images/thumb-1600x1200.png',
			title: 'One',
			text: 'one',
		},
		{
			img: '../images/thumb-1600x1200.png',	
			title: 'Two',
			text: 'two',
		},
		{
			img: '../images/thumb-1600x1200.png',
			title: 'Three',
			text: 'three',
		},
		{
			img: '../images/thumb-1600x1200.png',
			title: 'Four',
			text: 'four',
		},
		{
			img: '../images/thumb-1600x1200.png',
			title: 'Five',
			text: 'five',
		}
	],
};

export default class Home extends React.Component {
	render() {
		return (
				<div id="contentWrapper">
					<Events data={data}/>
				</div>
		);
	}
}
