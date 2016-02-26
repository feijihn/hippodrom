import Colors from 'material-ui/lib/styles/colors'

var styles = {
	MenuStyle: {
		backgroundColor: Colors.lightBlue50
	},
	MenuElementStyle: {
		height: '10vh',
	},
	MenuInkBarStyle: {
		backgroundColor: Colors.red201,
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
		backgroundColor: Colors.orange50,
		position: 'absolute',
		backgroundRepeat: '',
		zIndex: -2
	},
	ContentWrapper: {
		width: '70%',
		height: 'auto',
		position: 'absolute',
		top: '23vh',
		left: '15%',
		backgroundColor: Colors.lime100
	},
	MenuWrapper: {
		width:'70%',
		position: 'absolute',
		top: '13vh',
		left: '15%'
	},
	appBarStyle: {
		height: '23vh',
		width: '100%',
		textAlign: 'center',
		backgroundColor: Colors.grey50,
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
	//newsBlockStyle: {
		
	//},
}



module.exports = styles;
