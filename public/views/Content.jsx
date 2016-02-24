import React from 'react';

export default class Content extends React.Component {
	render() {
		return (
			<div id="contentWrapper">
				{this.props.chidren}
			</div>
		)
	}
}
