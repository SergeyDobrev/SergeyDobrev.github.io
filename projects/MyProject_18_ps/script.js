var w = $(window).width() / 2,
	topVar = 0,
	leftVar = 0,
	coverObj = new Array(),
	ajaxObj = new Object();

	if (w > 500) {
		leftVar = w - 500;
		w = 500;
		topVar = 25;
	}


	var xhr = new XMLHttpRequest(); 
	xhr.open("GET",'ajax.txt',true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			ajaxObj = JSON.parse(xhr.responseText);
		}
	}


for (var i = 0; i < 7; i++) {
	coverObj[i] = new Array();
	for (var j = 0; j < 20; j++) {

		coverObj[i][j] = document.createElement('div');
		document.body.appendChild(coverObj[i][j]);

		coverObj[i][j].style.position = 'absolute';
		coverObj[i][j].style.width = (w / 10) + 'px';
		coverObj[i][j].style.height = (w / 10) + 'px';
		coverObj[i][j].style.left = leftVar + (j * w/10) + 'px';
		coverObj[i][j].style.top = topVar + (i * w/10) + 'px';
		coverObj[i][j].style.transition = 'transform 1s';
		coverObj[i][j].style.transform = 'rotateY(90deg) rotateX(90deg)';
		coverObj[i][j].style.backgroundImage = 'url(fon_2.jpg)';		
		coverObj[i][j].style.backgroundSize = w * 2 + 'px ' + w * 0.7 + 'px';		
		coverObj[i][j].style.backgroundPosition = (w * 2 - j * w / 10) + 'px ' + (w * 0.7 - i * w / 10) + 'px';

	}
}

var i = 6,
j = 0,
n = 0,
IntervalId = setInterval(
	function() {
		coverObj[i--][j++].style.transform = 'rotateY(0deg) rotateX(0deg)';
		if (n++ === 140) clearInterval(IntervalId);
		if (i === -1) i = 6;
		if (j === 20) j = 0;
			

	},
5);


var linkObj = new Array();
for (var m = 0; m < 9; m++) {

		linkObj[m] = document.createElement('div');
		document.body.appendChild(linkObj[m]);
		linkObj[m].style.position = 'absolute';
		linkObj[m].style.width = (w * 2 - w * 0.02) + 'px';
		linkObj[m].style.left = leftVar + w * 0.01 + 'px';
		linkObj[m].style.height = (w * .069) + 'px';
		linkObj[m].style.top = topVar + (w * 0.01) + (m * w * 0.076) + 'px';



		linkObj[m].style.backgroundImage = 'linear-gradient(to left, rgba(25,25,112,0.05), transparent)';
		linkObj[m].style.transition = 'backgroundImage 1s';
		linkObj[m].onmouseover = function() {
			this.style.backgroundImage = 'linear-gradient(to left, rgba(25,25,112,0.3), transparent';

		}
		linkObj[m].onmouseout = function() {
			this.style.backgroundImage = 'linear-gradient(to left, rgba(25,25,112,0.05), transparent)';

		}


	}


