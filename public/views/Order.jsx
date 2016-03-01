import React from 'react';
import Content from './Content.jsx';
import Styles from '../styles/InlineStyles.js';
import Colors from 'material-ui/lib/styles/colors';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker'

export default class Order extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		const actions = [
			<FlatButton
		label="Cancel"
		secondary={true}
		onTouchTap={this.handleClose}
			/>,
			<FlatButton
		label="Ok"
		primary={true}
		keyboardFocused={true}
		onTouchTap={this.handleClose} 
			/>,
		];
		return (
			<div>
				<RaisedButton 
				label="Заказ стола" 
				backgroundColor={Colors.brown400} 
				style={Styles.Order.button} 
				onTouchTap={this.handleOpen} 
				secondary={true} 
				/>
					<Dialog
					title="Заказ стола"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose} 
					>
						<DatePicker 
						hintText="Выберите дату" 
						mode="landscape" 
						/>	
						</Dialog>
			</div>
		);
	}
}
