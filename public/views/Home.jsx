import React from 'react';
import Content from './Content.jsx';
import styles from '../styles/InlineStyles.js';
import Events from './Events.jsx';

var data = {
	EventsData: [
		{
			img: 'http://data.whicdn.com/images/77592858/large.jpg',
			title: 'One',
			text: 'one',
		},
		{
			img: 'http://data.whicdn.com/images/77592858/large.jpg',
			title: 'Two',
			text: 'two',
		},
		{
			img: 'http://data.whicdn.com/images/77592858/large.jpg',
			title: 'Three',
			text: 'three',
		},
		{
			img: 'http://data.whicdn.com/images/77592858/large.jpg',
			title: 'Four',
			text: 'four',
		},
		{
			img: 'http://data.whicdn.com/images/77592858/large.jpg',
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
