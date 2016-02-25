import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Paper from 'material-ui/lib/paper';
import Styles from '../styles/InlineStyles.js';

export default class MenuBar extends React.Component {
	constructor(props)	{
		super(props);
		this.state =  {
			value: this.props.defaultValue,
		};
	}

	handleChange = (value) => {
		this.setState({
			value: value,
		});
		this.props.updateContent(value);
	};

	render() {
		return(
			<Paper style={Styles.MenuWrapper} zDepth={2} rounded={false}>
      <Tabs
      	tabItemContainerStyle={Styles.MenuStyle}
        value={this.state.value}
        onChange={this.handleChange}
				inkBarStyle={Styles.MenuInkBarStyle}
      >
        <Tab style={Styles.MenuElementStyle} label="События" value="Home" ></Tab>
        <Tab style={Styles.MenuElementStyle} label="Новости" value="News"></Tab>
        <Tab style={Styles.MenuElementStyle} label="Календарь" value="Calendar" ></Tab>
        <Tab style={Styles.MenuElementStyle} label="Места" value="Places" ></Tab>
        <Tab style={Styles.MenuElementStyle} label="Медиа" value="Gallery" ></Tab>
        <Tab style={Styles.MenuElementStyle} label="Контакты" value="Contacts" ></Tab>
      </Tabs>
			</Paper>  
		);
	}
}
