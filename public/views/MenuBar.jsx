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
			<Paper style={Styles.Header.menuWrapper} zDepth={2} rounded={false}>
      <Tabs
      	tabItemContainerStyle={Styles.Header.menuStyle}
        value={this.state.value}
        onChange={this.handleChange}
				inkBarStyle={Styles.Header.menuInkBarStyle}
      >
        <Tab style={Styles.Header.menuElementStyle} label="События" value="Home" ></Tab>
        <Tab style={Styles.Header.menuElementStyle} label="Новости" value="News"></Tab>
        <Tab style={Styles.Header.menuElementStyle} label="Календарь" value="Calendar" ></Tab>
				<Tab style={Styles.Header.menuElementStyle} label="Места" value="Places" ></Tab>
        <Tab style={Styles.Header.menuElementStyle} label="Медиа" value="Gallery" ></Tab>
        <Tab style={Styles.Header.menuElementStyle} label="Контакты" value="Contacts" ></Tab>
      </Tabs>
			</Paper>  
		);
	}
}
