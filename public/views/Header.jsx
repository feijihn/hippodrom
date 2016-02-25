import React from 'react';
import Styles from '../styles/InlineStyles.js';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Header extends React.Component {
	render() {
		return(
			<AppBar 
			style={Styles.appBarStyle}
			showMenuIconButton={false}> 
			<RaisedButton style={Styles.logoStyle}><h2 id="logo">#ИППОДРОМ</h2></RaisedButton>
			</AppBar>
		)
	}
}
