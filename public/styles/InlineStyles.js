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
	},
	backgroundStyle: {
	  height: '100%',
	  width: '100%',
	  backgroundColor: Colors.amber100,
	  position: 'absolute',
	  zIndex: -2
	},
	contentWrapper: {
		width: '70%',
		height: 600,
		position: 'absolute',
		top: 75,
		left: '15%',
		backgroundColor: 'white'
	},
	appBarStyle: {
	  height: 150,
	  width: '100%',
	  textAlign: 'center',
	  backgroundColor: Colors.orange300,
	  zIndex: -1
	},
	logoStyle: {
		margin: 6,
		marginTop: 20, 
		padding: 2, 
	},
	buttonsStyle: {
    backgroundColor: Colors.deepOrange400,
  },
}



module.exports = styles;
