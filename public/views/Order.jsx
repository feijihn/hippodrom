import React from 'react';
import Content from './Content.jsx';
import Styles from '../styles/InlineStyles.js';
import Colors from 'material-ui/lib/styles/colors';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import Divider from 'material-ui/lib/divider';
import TextField from 'material-ui/lib/text-field';
import Snackbar from 'material-ui/lib/snackbar';


export default class Order extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			ordered: false,
			orderedNotification: false
		};
	}

	handleOpen = () => {
		this.setState({
			open: true,
		});
	};

	handleClose = () => {
		this.setState({
			open: false,
		});
	};

	handleOrder = () => {
		this.setState({
			open: false,
			ordered: true,
			orderedNotification: true
		});
	};

	handleUnOrder = () => {
		this.setState({
			ordered: false,
		});
	};

	handleRequestClose = () => {
		this.setState({
			orderedNotification: false,
		});
	};

	render() {

		const unOrderButton = 
			<RaisedButton 
				label="Отменить заказ" 
				backgroundColor={Colors.red500} 
				style={Styles.Order.button}  
				onTouchTap={this.handleUnOrder} 
				secondary={true} 
			/>;

		const actions = [
			<FlatButton
				label="Отмена"
				secondary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Заказ"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleOrder} 
			/>,
		];

		const orderButton = 
			<div>
				<RaisedButton 
					label="Заказ стола" 
					backgroundColor={Colors.brown400} 
					style={Styles.Order.button} 
					onTouchTap={this.handleOpen} 
					secondary={true} 
				/>
				<Snackbar
					open={this.state.orderedNotification}
					message="Заказ отменен"
					autoHideDuration={2500}
					onRequestClose={this.handleRequestClose}
				/>
				<Dialog
					title="Заказ стола"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
					contentStyle = {{width:500}} 
				>
						<p>Вы можете позвонить по нашему номеру <b>89273275290</b> или воспользоваться представленной ниже формой</p>
						<br/>
						<TextField
							hintText="Имя"
						/>
						<br/>
						<TextField
							hintText="Количество мест"
						/>
						<DatePicker 
							hintText="Нажмите, чтобы выбрать дату" 
							mode="landscape" 
						/>	
				</Dialog>
			</div>;

		return (
			<div>
			{this.state.ordered ? unOrderButton : orderButton }
			</div>
		);
	}
}
