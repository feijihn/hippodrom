import React from 'react';
import Header from './Header.jsx';
import MenuBar from './MenuBar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import Order from './Order.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Styles from '../styles/InlineStyles.js';

import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors'
import Paper from 'material-ui/lib/paper';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import RaisedButton from 'material-ui/lib/raised-button';

injectTapEventPlugin();

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Home',
    };
  };

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
	render() {
		return (
			<div>  
			<Header />
      <Order />
			<MenuBar updateContent={this.handleChange} defaultValue={'Home'}/>
			<Content value={this.state.value}/>
			</div>
		)
	}
}
