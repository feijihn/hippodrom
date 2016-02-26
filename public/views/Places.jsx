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
					<Paper style={Styles.placesStyle} id="placeOne" zDepth={3} rounded={false}>
						<div style={Styles.titleStyle}><h3>Бар</h3></div>
					</Paper>
					<Paper style={Styles.placesStyle} id="placeTwo" zDepth={3} rounded={false}>
						<div style={Styles.titleStyle}><h3>Зал</h3></div>
					</Paper>
					<Paper style={Styles.placesStyle} id="placeThree" zDepth={3} rounded={false}>
						<div style={Styles.titleStyle}><h3>Ресторан</h3></div>
					</Paper>
					<Paper style={Styles.placesStyle} id="placeFour" zDepth={3} rounded={false}>
						<div style={Styles.titleStyle}><h3>Студия</h3></div>
					</Paper>
				</div>
		);
	}
}
