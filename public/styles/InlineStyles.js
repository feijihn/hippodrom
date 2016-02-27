import Colors from 'material-ui/lib/styles/colors';

//make element height equal to width for square shapes
function squarify(element) {
	element.height = element.width
};

var styles = {
	MenuStyle: {
		backgroundColor: Colors.brown500,
	},
	MenuElementStyle: {
		height: '10vh',
		color: 'black',
	},
	MenuInkBarStyle: {
		backgroundColor: Colors.brown900,
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
		backgroundColor: Colors.lightBlue50,
		position: 'absolute',
		backgroundRepeat: '',
		zIndex: -2
	},

	ContentWrapper: {
		width: '70%',
		height: '69vh',
		position: 'absolute',
		top: '23vh',
		left: '15%',
		backgroundColor: Colors.brown100
	},
	MenuWrapper: {
		width:'70%',
		position: 'absolute',
		top: '13vh',
		left: '15%'
	},
	appBarStyle: {
		height: '20vh',
		width: '100%',
		textAlign: 'center',
		backgroundColor: Colors.brown200,
		zIndex: -1
	},
	logoStyle: {
		margin: 6,
		marginTop: 20,
		padding: 2,
	},
	buttonsStyle: {
		backgroundColor: Colors.brown500,
	},
	//newsBlockStyle: {
		
	//},
	logoStyle: {
		margin: 6,
		marginTop: 12, 
		padding: 2, 
		height: 36
	},
	iconsDivStyle: {
		margin: 6,
		marginTop: 12,  
		height: 36,
	},
	buttonsStyle: {
    backgroundColor: Colors.brown500,
  },
  placesStyle: {
	  width: '50%',
	  height: 296,
	  padding: '125px',
	  textAlign: 'center',
	  display: 'inline-block',
	  backgroundImage: 'url(../images/thumbone.jpg)',
  },
  titleStyle: {
  	backgroundColor: Colors.brown500,
     display: 'inline-block',
     padding: '10px',
     opacity: 0.9
  },
  orderButton: {
  	top: '30%',
  	opacity: 0.8,
  	position: 'fixed'
  },
  iconsStyle: {
    margin: 6,
    marginTop: 2,
	opacity: 0.5
  },
  sliderFooter: {
  	width: '67vw',
  	height: 70,
  	position: 'absolute',
  	bottom: 0,
  	backgroundColor: 'rgba(0,0,0,0.7)',
  	color: 'white',
  	padding: 20
  },
	FooterStyle: {
		width: '100%' ,
		height: '8vh' ,
		backgroundColor: Colors.grey50,
		borderTop: '1px solid',
		position: 'absolute',
		bottom: 0,
		opacity: 0.5,
		zIndex: -2,
	},
	ContactsInfoWrapper: {
		width: '45%',
		backgroundColor: Colors.black,
		height: 'auto',
		position: 'absolute',
		zIndex: 9,
		marginLeft: '65%',
		paddingLeft: '5px'
	},
	ContactsInfo: {
		color: Colors.white,
		fontWeight: 200	
	}
}


module.exports = styles;
