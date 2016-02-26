function showPenisLength(name){
	var orientation = function(){
		var a = Math.floor(Math.random()*(3)+1);
		switch(a){
			case 0:
			case 1:
					return  'Straight';
				break;
			case 2:
					return 'Homosexual';
				break;
			case 3:
					return 'Bisexual';
				break;	
		}
	}();
	var radiusBoundary = 0;
	print(name + '\'s penis length is ' + Math.floor(Math.random()*(15)+7) + ' cantimeters.');
	print(name + '\'s orientation is ' + orientation)
	switch(orientation){
		case 'Straight':
			radiusBoundary = 2; 
			break;
		case 'Homosexual':
			radiusBoundary = 10;
			break;
		case 'Bi':
			radiusBoundary = 7;
			break;
	}
	print(name + '\'s anus width is ' + Math.floor(Math.random()*(radiusBoundary)) + ' cantimeters.');
}

var n = readline().split(' ')[0];

showPenisLength(n);





