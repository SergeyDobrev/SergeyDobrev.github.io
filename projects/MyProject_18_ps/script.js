var w = $(window).width() / 2,
	tmpObj = undefined,
	sideRotateArray = ['', 'rotateY(180deg) ', 'rotateX(90deg) ', 'rotateX(-90deg) '],
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
		myObjArray[i][j].style.transformStyle = 'preserve-3d';
		myObjArray[i][j].style.position = 'absolute';
		myObjArray[i][j].style.width = (w / 10) + 'px';
		myObjArray[i][j].style.height = (w / 10) + 'px';
		myObjArray[i][j].style.left = leftVar + (j * w/10) + 'px';
		myObjArray[i][j].style.top = topVar + (i * w/10) + 'px';
		myObjArray[i][j].style.transition = 'transform 2s';

		myObjArray[i][j].r = 0;
		myObjArray[i][j].onmousemove = function() {
			if (tmpObj != this) {
				this.r++;
				this.style.transform = 'rotateX('+ 360 * this.r + 'deg) rotateY('+ 360 * this.r + 'deg)';
				tmpObj = this;
			}
		}

		for (var n = 0; n < sideRotateArray.length; n++) {
			myObjArray[i][j].obj = new Array();
			myObjArray[i][j].obj[n] = document.createElement('div');
			myObjArray[i][j].appendChild(myObjArray[i][j].obj[n]);
			myObjArray[i][j].obj[n].style.position = 'absolute';
			myObjArray[i][j].obj[n].style.width = (w / 10) + 'px';
			myObjArray[i][j].obj[n].style.height = (w / 10) + 'px';
			myObjArray[i][j].obj[n].style.transform = sideRotateArray[n] + 'translateZ(' + w / 20 + 'px)';
			myObjArray[i][j].obj[n].style.borderLeft = '1px rgb(25,25,112) solid';
			myObjArray[i][j].obj[n].style.borderRight = '1px rgb(25,25,112) solid';

			if (n === 1) myObjArray[i][j].obj[n].style.border = '1px rgb(25,25,112) solid';

			if (n === 0) {
				myObjArray[i][j].obj[n].style.border = 'none';
				myObjArray[i][j].obj[n].style.backgroundImage = 'url(fon_2.jpg)';		
				myObjArray[i][j].obj[n].style.backgroundSize = w * 2 + 'px ' + w * 0.7 + 'px';		
				myObjArray[i][j].obj[n].style.backgroundPosition = (w * 2 - j * w / 10) + 'px ' + (w * 0.7 - i * w / 10) + 'px';
			}
		}
	}
}


