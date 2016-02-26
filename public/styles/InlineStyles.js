import Colors from 'material-ui/lib/styles/colors';

//make element height equal to width for square shapes
function squarify(element) {
	element.height = element.width
};

var styles = {
	MenuStyle: {
		backgroundColor: Colors.deepOrange400
	},
	MenuElementStyle: {
		height: '9vh',
	},
	MenuInkBarStyle: {
		backgroundColor: Colors.lime900, 
		color:'rgba(255, 255, 255, 0)',
	},
  ContentStyle: {
		position: 'relative',
		zIndex: -1,
		width: '80%',
		marginRight: '10%',
		marginLeft: '10%'
	},
	ContentWrapper: {
		width: '70%',
		height: 'auto',
		position: 'absolute',
		top: '21vh',
		left: '15%',
		backgroundColor: 'white'
	},
	MenuWrapper: {
		width:'70%',
		position: 'absolute',
		top: '12vh',
		left: '15%'
	},
	appBarStyle: {
	  height: '21vh',
	  width: '100%',
	  textAlign: 'center',
	  backgroundColor: Colors.orange300,
	  zIndex: -1
	},
	logoStyle: {
		margin: 6,
		marginTop: 20, 
		padding: 2, 
		height: 36
	},
	iconsDivStyle: {
		margin: 6,
		marginTop: 20,  
		height: 36,
	},
	buttonsStyle: {
    backgroundColor: Colors.deepOrange400,
  },
  placesStyle: {
	  width: '50%',
	  height: 296,
	  textAlign: 'center',
	  display: 'inline-block',
  },
  titleStyle: {
  	textAlign: 'center',
  },
  orderButton: {
  	top: '40%',
  	opacity: 0.8,
  	position: 'fixed'
  },
  iconsStyle: {
    margin: 6,
    marginTop: 2,
	opacity: 0.5
  }
}


module.exports = styles;
