import React from 'react';
import Content from './Content.jsx';
import styles from '../styles/InlineStyles.js';
import Events from './Events.jsx';
import Paper from 'material-ui/lib/paper';


export default class Home extends React.Component {
	render() {
		return (
			<Paper zDepth={3}>
				<div id="contentWrapper">
					<Events data={this.props.data}/>
				</div>
			</Paper>
		);
	}
}
