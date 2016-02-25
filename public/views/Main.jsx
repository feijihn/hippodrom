import React from 'react';
import Header from './Header.jsx';
import MenuBar from './MenuBar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Neccessary for material-ui to work fine until React 1.0.0 will be released
injectTapEventPlugin();

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		content: 'Home',
		};
	}

	tabChanged = (value) =>  {
		this.setState({
			content: value,
		});
	};

	render() {
		return (
		<div>
			<Header />
			<MenuBar updateContent={this.tabChanged} defaultValue={'Home'} />
			<Content value={this.state.content} />
			<Footer />
		</div>
		);
	}
}
