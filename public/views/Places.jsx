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
		var placesElements = this.props.data.map (function (element, id){
			return (
				<Paper style={{
					width: '50%',
					height: '35vh',
					display: 'inline-block',
					backgroundImage: 'url(' + element.img + ')', }} 
					zDepth={3} 
					rounded={false}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
				>
					<div style={this.state.onHover ? Styles.Places.titleOnHover : Styles.Places.title}><h3>{element.title}</h3></div>
				</Paper>
			);
		}, this);
		return (
			<div>
			{placesElements}
			</div>
		);
	}
};