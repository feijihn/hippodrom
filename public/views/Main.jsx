import React from 'react';
import Header from './Header.jsx';
import MenuBar from './MenuBar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Styles from '../styles/InlineStyles.js';

import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors'
import Paper from 'material-ui/lib/paper';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import RaisedButton from 'material-ui/lib/raised-button';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  };

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
	render() {
		return (
			<div style={Styles.backgroundStyle}>  
			<AppBar 
			style={Styles.appBarStyle}
			showMenuIconButton={false}> 
			<RaisedButton style={Styles.logoStyle}><h2 id="logo">#ИППОДРОМ</h2></RaisedButton>

			</AppBar>
			<Paper style={Styles.contentWrapper} zDepth={2} rounded={false}>

      <Tabs
      	tabItemContainerStyle={Styles.buttonsStyle}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="События" value="a" style={{height: 75}}></Tab>
        <Tab label="Новости" value="a"></Tab>
        <Tab label="Календарь" value="a" ></Tab>
        <Tab label="Места" value="a" ></Tab>
        <Tab label="Медиа" value="a" ></Tab>
        <Tab label="Контакты" value="a" ></Tab>
      </Tabs>

			</Paper>
			</div>
		)
	}
}
