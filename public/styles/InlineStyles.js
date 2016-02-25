import Colors from 'material-ui/lib/styles/colors'

var styles = {
	MenuStyle: {
		backgroundColor: Colors.grey700
	},
	MenuElementStyle: {
		backgroundColor: 'rbga(0, 0, 0, 0)',
		transform: 'none',
		borderRight: '1px solid rgba(255,255,255,0.3)'
	},
	MenuInkBarStyle: {
		backgroundColor: 'rgba(255,255,255,1)', 
		color:'rgba(255, 255, 255, 0)'
	},
  ContentStyle: {
		position: 'relative',
		zIndex: -1,
		width: '80%',
		marginRight: '10%',
		marginLeft: '10%'
	}
}

module.exports = styles;
