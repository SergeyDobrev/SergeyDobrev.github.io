var w = $(window).width() / 2,
	topVar = 0,
	leftVar = 0,
	myObjArray = new Array();

	if (w > 500) {
		leftVar = w - 500;
		w = 500;
		topVar = 25;
	}

for (var i = 0; i < 7; i++) {
	myObjArray[i] = new Array();
	for (var j = 0; j < 20; j++) {

		myObjArray[i][j] = document.createElement('div');
		document.body.appendChild(myObjArray[i][j]);
		myObjArray[i][j].style.position = 'absolute';
		myObjArray[i][j].style.width = (w / 10) + 'px';
		myObjArray[i][j].style.height = (w / 10) + 'px';
		myObjArray[i][j].style.left = leftVar + (j * w/10) + 'px';
		myObjArray[i][j].style.top = topVar + (i * w/10) + 'px';
		myObjArray[i][j].style.transition = 'transform 1s';
		myObjArray[i][j].style.transform = 'rotateY(90deg) rotateX(90deg)';
		myObjArray[i][j].style.backgroundImage = 'url(fon_2.jpg)';		
		myObjArray[i][j].style.backgroundSize = w * 2 + 'px ' + w * 0.7 + 'px';		
		myObjArray[i][j].style.backgroundPosition = (w * 2 - j * w / 10) + 'px ' + (w * 0.7 - i * w / 10) + 'px';

	}
}

var i = 6;
var j = 0;
var n = 0;
var IntervalId = setInterval(
	function() {
		myObjArray[i--][j++].style.transform = 'rotateY(0deg) rotateX(0deg)';
		if (n++ === 140) clearInterval(IntervalId);
		if (i === -1) i = 6;
		if (j === 20) j = 0;
			

	},5);



