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
		label="Отмена"
		secondary={true}
		onTouchTap={this.handleClose}
			/>,
			<FlatButton
		label="Заказ"
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
			</div>
		);
	}
}
