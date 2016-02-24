import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import styles from '../styles/InlineStyles.js';

export default class MenuBar extends React.Component {
	render() {
		return(
			<Tabs tabItemContainerStyle={styles.MenuStyle} inkBarStyle={styles.MenuInkBarStyle}>
				<Tab style={styles.MenuElementStyle} label="Главная" >
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Новости" >
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Места" >
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Галерея" >
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Контакты" >
				</Tab>
			</Tabs>
    	);
	}
}
