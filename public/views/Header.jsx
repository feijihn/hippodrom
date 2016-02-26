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
			style={Styles.appBarStyle}
			showMenuIconButton={false}> 
			<RaisedButton style={Styles.logoStyle}><h2 id="logo">#ИППОДРОМ</h2></RaisedButton>
			<div style={style}>
			<RaisedButton style={Styles.iconsDivStyle}>
				<img src="../images/icons/vk.png" style={Styles.iconsStyle} />
				<img src="../images/icons/youtube.png" style={Styles.iconsStyle} />
				<img src="../images/icons/instagram.png" style={Styles.iconsStyle} />
				</RaisedButton>
			</div>
			</AppBar>
		)
	}
}
