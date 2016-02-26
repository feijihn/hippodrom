import React from 'react';
import Content from './Content.jsx';
import Styles from '../styles/InlineStyles.js';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

export default class Order extends React.Component {
	render() {
		return (
			<div><RaisedButton label="Заказ стола" backgroundColor={Colors.orange300} style={Styles.orderButton} /></div>
		);
	}
}
