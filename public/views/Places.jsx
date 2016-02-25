import React from 'react';
import Content from './Content.jsx';
import styles from '../styles/InlineStyles.js';
import Paper from 'material-ui/lib/paper';

const style = {
  height: 250,
  width: '50%',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: 'grey',
  opacity: 0.8
};

export default class Places extends React.Component {
	render() {
		//var news = this.props.data.map((el) => {
			//return <NewsElement data={el.data} key={Date.now()} />
		//});
		return (
				<div id="contentWrapper">
					<Paper style={style} zDepth={3} rounded={false}/>
					<Paper style={style} zDepth={3} rounded={false}/>
					<Paper style={style} zDepth={3} rounded={false}/>
					<Paper style={style} zDepth={3} rounded={false}/>
				</div>
		);
	}
}
