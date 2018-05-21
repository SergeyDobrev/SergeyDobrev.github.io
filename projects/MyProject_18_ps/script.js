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
		myObjArray[i][j].style.backgroundImage = 'url(fon_2.jpg)';		
		myObjArray[i][j].style.backgroundSize = w * 2 + 'px ' + w * 0.7 + 'px';		
		myObjArray[i][j].style.backgroundPosition = (w * 2 - j * w / 10) + 'px ' + (w * 0.7 - i * w / 10) + 'px';

		myObjArray[i][j].onmousemove = function() {

				this.style.transform = 'rotateY(360deg)';

		}
	}
}

// var t = 0;
// for (var i = 0; i < 7; i++) {
// 	for (var j = 0; j < 20; j++) {
// 		t = t + 500;
// 		var timerId = setTimeout(myObjArray[i][j].moveFon(),t);
// 		console.log(t);
		
// 	}
// }


