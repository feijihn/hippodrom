import React from 'react';
import Home from './Home.jsx';
import News from './News.jsx';
import Places from './Places.jsx';
import Gallery from './Gallery.jsx';
import Contacts from './Contacts.jsx';

export default class Content extends React.Component {
	render() {
		switch(this.props.value){
			case 'Home':
				return (
					<Home />
				);
				break;
			case 'News':
				return (
					<News />
				);
				break;
			case 'Places':
				return (
					<Places />
				);
				break;
			case 'Gallery':
				return (
					<Gallery />
				);
				break;
			case 'Contacts':
				return (
					<Contacts />
				);
				break;

		}
	}
}
