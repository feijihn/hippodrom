import React from 'react';
import Content from './Content.jsx';
import Styles from '../styles/InlineStyles.js';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';


export default class Places extends React.Component {
	render() {
		//var news = this.props.data.map((el) => {
			//return <NewsElement data={el.data} key={Date.now()} />
		//});
		return (
				<div id="contentWrapper">
					<Paper style={Styles.placesStyle} zDepth={3} rounded={false}>
						<h3>Бар</h3>
					</Paper>
					<Paper style={Styles.placesStyle} zDepth={3} rounded={false}>
						<h3 style={Styles.titleStyle}>Зал</h3>
					</Paper>
					<Paper style={Styles.placesStyle} zDepth={3} rounded={false}>
						<h3 style={Styles.titleStyle}>Ресторан</h3>
					</Paper>
					<Paper style={Styles.placesStyle} zDepth={3} rounded={false}>
						<h3 style={Styles.titleStyle}>Студия</h3>
					</Paper>
				</div>
		);
	}
}
