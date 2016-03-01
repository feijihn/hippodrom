import Colors from 'material-ui/lib/styles/colors';

//make element height equal to width for square shapes
function squarify(element) {
	element.height = element.width
};

var styles = {

	Header: {
		container: {
			height: '20vh',
			width: '100%',
			textAlign: 'center',
			backgroundColor: Colors.brown200,
			zIndex: -1
		},

		Menu: {
			container: {
				width:'70%',
				position: 'absolute',
				top: '10vh',
				left: '15%'
			},
			color: {
				backgroundColor: Colors.brown500,
			},
			buttonContainer: {
				height: '10vh',
			},
			inkBarColor: {
				backgroundColor: Colors.brown900,
			},
		},

		Logo: {
			container: {
				margin: 6,
				marginTop: 12, 
				padding: 2, 
				height: 36
			},
		},

		Social: {
			container: {
				margin: 6,
				marginTop: 12,  
				height: 36,
			},
			icons: {
				margin: 6,
				marginTop: 2,
				opacity: 0.5
			},
		},
	},

	Body: {
		contentWrapper: {
			width: '70%',
			height: '69vh',
			position: 'absolute',
			top: '20vh',
			left: '15%',
			backgroundColor: Colors.brown100
		},
	},

	Events: {
		sliderFooter: {
			width: '67vw',
			height: 70,
			position: 'absolute',
			bottom: 0,
			backgroundColor: 'rgba(0,0,0,0.7)',
			color: 'white',
			padding: 20
		},
	},


	Places: {
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
	},

	Order: {
		button: {
			top: '30%',
			opacity: 0.8,
			position: 'fixed'
		},		
	},

	Contacts: {
		textWrapper: {
			width: '25%',
			backgroundColor: 'rgba(0,0,0,0.85)',
			height: 'auto',
			position: 'absolute',
			zIndex: 9,
			marginLeft: '75%',
			padding: '10px'
		},
		text: {
			color: Colors.white,
			fontWeight: 200	
		}
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

	Footer: {
		container: {
			width: '100%' ,
			height: '8vh' ,
			backgroundColor: Colors.grey50,
			borderTop: '1px solid',
			position: 'absolute',
			bottom: 0,
			opacity: 0.5,
			zIndex: -2,
		}
	},
}


module.exports = styles;
