import React from 'react';
import Styles from '../styles/InlineStyles.js';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';


var style = {
	float: 'right',
	position: 'absolute',
	right: 10
};



export default class Header extends React.Component {
	render() {
		return(
			<AppBar 
			style={Styles.Header.container}
			showMenuIconButton={false}> 
			<RaisedButton style={Styles.Header.Logo.container}>
				<h2 id="logo">
				#ИППОДРОМ
				</h2>
			</RaisedButton>
			<div style={style}>
			<RaisedButton style={Styles.Header.Social.container}>
				<a href="#"> <img src="../images/icons/vk.png" style={Styles.Header.Social.icons} /> </a>
				<a href="#"> <img src="../images/icons/youtube.png" style={Styles.Header.Social.icons} /> </a>
				<a href="vk.com"> <img src="../images/icons/instagram.png" style={Styles.Header.Social.icons} /> </a>
				</RaisedButton>
			</div>
			</AppBar>
		)
	}
}
