import React from 'react';
import Content from './Content.jsx';
import styles from '../styles/InlineStyles.js';
import Paper from 'material-ui/lib/paper';
import NewsElement from './NewsElement.jsx';

export default class News extends React.Component {
	render() {
		//var news = this.props.data.map((el) => {
			//return <NewsElement data={el.data} key={Date.now()} />
		//});
		return (
				<div id="contentWrapper">
				<NewsElement />
				<NewsElement />
				</div>
		);
	}
}
