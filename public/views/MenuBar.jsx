import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import styles from '../styles/InlineStyles.js';

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
			<Tabs 
				tabItemContainerStyle={styles.MenuStyle} 
				inkBarStyle={styles.MenuInkBarStyle} 
				onChange={this.handleChange}
				value={this.state.value}
				contentContainerStyle={styles.ContentStyle}
			>
				<Tab style={styles.MenuElementStyle} label="Главная" value={'Home'}>
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Новости" value={'News'}>
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Места" value={'Places'}>
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Галерея" value={'Gallery'}>
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Контакты" value={'Contacts'}>
				</Tab>
			</Tabs>
    	);
	}
}
