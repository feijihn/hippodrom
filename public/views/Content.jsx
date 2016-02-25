import React from 'react';
import Home from './Home.jsx';
import News from './News.jsx';
import Places from './Places.jsx';
import Gallery from './Gallery.jsx';
import Contacts from './Contacts.jsx';
import Calendar from './Calendar.jsx'
import Paper from 'material-ui/lib/paper';
import Styles from '../styles/InlineStyles.js';

export default class Content extends React.Component {
	render() {
		switch(this.props.value){
			case 'Home':
				return (
					<Paper style={Styles.ContentWrapper}>
					<Home />
					</Paper>
				);
				break;
			case 'News':
				return (
					<Paper style={Styles.ContentWrapper}>
					<News />
					</Paper>
				);
				break;
			case 'Calendar':
				return(
					<Paper style={Styles.ContentWrapper}>
					<Calendar />
					</Paper>
				);
				break;
			case 'Places':
				return (
					<Paper style={Styles.ContentWrapper}>
					<Places />
					</Paper>
				);
				break;
			case 'Gallery':
				return (
					<Paper style={Styles.ContentWrapper}>
					<Gallery />
					</Paper>
				);
				break;
			case 'Contacts':
				return (
					<Paper style={Styles.ContentWrapper}>
					<Contacts />
					</Paper>
				);
				break;

		}
	}
}
