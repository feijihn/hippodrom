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
			<Paper style={Styles.Header.Menu.container} zDepth={2} rounded={false}>
			<Tabs
				tabItemContainerStyle={Styles.Header.Menu.color}
				value={this.state.value}
				onChange={this.handleChange}
				inkBarStyle={Styles.Header.Menu.inkBarColor}
			>
				<Tab style={Styles.Header.Menu.buttonContainer} label="События" value="Home" ></Tab>
				<Tab style={Styles.Header.Menu.buttonContainer} label="Новости" value="News"></Tab>
				<Tab style={Styles.Header.Menu.buttonContainer} label="Календарь" value="Calendar" ></Tab>
				<Tab style={Styles.Header.Menu.buttonContainer} label="Места" value="Places" ></Tab>
				<Tab style={Styles.Header.Menu.buttonContainer} label="Медиа" value="Gallery" ></Tab>
				<Tab style={Styles.Header.Menu.buttonContainer} label="Контакты" value="Contacts" ></Tab>
			</Tabs>
			</Paper>  
		);
	}
}
