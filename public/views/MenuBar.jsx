import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import styles from '../styles/InlineStyles.js';
import Contacts from './Contacts.jsx';
import News from './News.jsx';
import Home from './Home.jsx';
import Gallery from './Gallery.jsx';
import Places from './Places.jsx';

export default class MenuBar extends React.Component {
	render() {
		return(
			<Tabs tabItemContainerStyle={styles.MenuStyle} inkBarStyle={styles.MenuInkBarStyle} className={'menubar'} contentContainerStyle={styles.ContentStyle}>
				<Tab style={styles.MenuElementStyle} label="Главная" >
						<Home />
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Новости" >
						<News />	
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Места" >
						<Places />
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Галерея" >
						<Gallery />
				</Tab>
				<Tab style={styles.MenuElementStyle} label="Контакты" >
						<Contacts />
				</Tab>
			</Tabs>
    	);
	}
}
