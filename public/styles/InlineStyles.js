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
			width: '70vw',
			height: 70,
			position: 'absolute',
			bottom: 0,
			backgroundColor: 'rgba(0,0,0,0.7)',
			color: 'white',
			padding: 20
		},
	},


	Places: {
		container: {
			width: '50%',
			height: '35vh',
			display: 'inline-block',
			backgroundImage: 'url(../images/thumbone.jpg)',
		},
		title: {
			width: '100%',
			height: '35vh',
			lineHeight: '35vh',
			backgroundColor: 'rgba(0,0,0,0.6)',
			display: 'inline-block',
			color: 'white',
			textAlign: 'center',
			fontSize: 30
		},
		titleOnHover: {
			width: '100%',
			height: '35vh',
			lineHeight: '35vh',
			display: 'inline-block',
			color: 'rgba(0,0,0,0.2)',
			textAlign: 'center',
			fontSize: 30
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

	Footer: {
		container: {
			width: '100%' ,
			height: '8vh' ,
			backgroundColor: Colors.grey50,
			borderTop: '1px solid',
			position: 'absolute',
			bottom: 0,
			opacity: 0.5,
		}
	},
}


module.exports = styles;
