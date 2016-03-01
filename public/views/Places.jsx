import React from 'react';
import Content from './Content.jsx';
import Styles from '../styles/InlineStyles.js';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';


export default class Places extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onHover: false,
		};
	};
	handleMouseEnter = () => {
		this.setState({
			onHover: true
		});
	};
	handleMouseLeave = () => {
		this.setState({
			onHover: false
		});
	};
	render () {
		return (
			<div>
				<Paper style={{
				width: '50%',
				height: '35vh',
				display: 'inline-block',
				backgroundImage: 'url(../images/thumbone.jpg)', }} 
				zDepth={3} 
				rounded={false}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>

					<div style={this.state.onHover ? Styles.Places.titleOnHover : Styles.Places.title}><h3>Бар</h3></div>
					
				</Paper>

				<Paper style={{
				width: '50%',
				height: '35vh',
				display: 'inline-block',
				backgroundImage: 'url(../images/thumbtwo.jpg)', }} 
				zDepth={3} 
				rounded={false}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>

					<div style={this.state.onHover ? Styles.Places.titleOnHover : Styles.Places.title}><h3>Зал</h3></div>

				</Paper>
				<Paper style={{
				width: '50%',
				height: '35vh',
				display: 'inline-block',
				backgroundImage: 'url(../images/thumbthree.jpg)', }} 
				zDepth={3} 
				rounded={false}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>

					<div style={this.state.onHover ? Styles.Places.titleOnHover : Styles.Places.title}><h3>Ресторан</h3></div>

				</Paper>
				<Paper style={{
				width: '50%',
				height: '35vh',
				display: 'inline-block',
				backgroundImage: 'url(../images/thumbfour.jpg)', }} 
				zDepth={3} 
				rounded={false}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>

					<div style={this.state.onHover ? Styles.Places.titleOnHover : Styles.Places.title}><h3>Студия</h3></div>

				</Paper>
			</div>
		);
	}
}
