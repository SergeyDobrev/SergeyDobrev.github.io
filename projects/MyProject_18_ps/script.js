var w = $(window).width(),				// ширина экрана
	topVar = 0,							// поле от верхнего края
	leftVar = 0,						// поля с права и с лева
	coverObj = new Array(),				// массив объектов с элементами фона
	linkObj = new Array();				// массив объектов ссылок (контакты)
	LinkArray = [{	
		'link':'http://testprovider.com/ua/Certificate/image/TP80906377'
		},
		{	
		'link':'http://testprovider.com/ua/Certificate/image/TP63278354'
		},
		{	
		'link':'http://testprovider.com/ua/Certificate/image/TP60170150'
		},
		{	
		'link':'http://testprovider.com/ua/Certificate/image/TP80906377'
		},
		{	
		'link':'http://testprovider.com/ua/Certificate/image/TP80906377'
		},
		{	
		'link':'http://testprovider.com/ua/Certificate/image/TP80906377'
		},
		{	
		'link':'http://testprovider.com/ua/Certificate/image/TP80906377'
		},
		{	
		'link':'http://testprovider.com/ua/Certificate/image/TP80906377'
		},
		{	
		'link':'http://testprovider.com/ua/Certificate/image/TP80906377'
		}
	]

	if (w > 1000) {						// если ширина єкрана > 1000 делаем поля
		leftVar = (w - 1000) / 2;
		w = 1000;
		topVar = 25;
	}


for (var i = 0; i < 7; i++) {			// создаём массив с объектами фона
	coverObj[i] = new Array();
	for (var j = 0; j < 20; j++) {

		coverObj[i][j] = document.createElement('div');
		document.body.appendChild(coverObj[i][j]);

		coverObj[i][j].style.position = 'absolute';
		coverObj[i][j].style.width = (w / 20) + 'px';
		coverObj[i][j].style.height = (w / 20) + 'px';
		coverObj[i][j].style.left = leftVar + (j * w / 20) + 'px';
		coverObj[i][j].style.top = topVar + (i * w / 20) + 'px';
		coverObj[i][j].style.transition = 'transform 1s';
		coverObj[i][j].style.transform = 'rotateY(90deg) rotateX(90deg)';
		coverObj[i][j].style.backgroundImage = 'url(fon_2.jpg)';		
		coverObj[i][j].style.backgroundSize = w + 'px ' + w * 0.35 + 'px';		
		coverObj[i][j].style.backgroundPosition = (w - j * w / 20) + 'px ' + (w * 0.35 - i * w / 20) + 'px';

		coverObj[i][j].rotateCover = function() {
			this.style.transform = 'rotateY(0deg) rotateX(0deg)';
		}		
	}
}


(function(){							// разворачиваем элементы фона

	let i = 6,				
	j = 0,
	n = 0,
	IntervalId = setInterval(
		function() {
			coverObj[i--][j++].rotateCover();
			if (n++ === 140) clearInterval(IntervalId);
			if (i === -1) i = 6;
			if (j === 20) j = 0;
		},
	5);
})();


(function(){							// создаём массив с объектами элементы ссылки (контакты)

	for (let m = 0; m < 9; m++) {

		linkObj[m] = document.createElement('div');
		document.body.appendChild(linkObj[m]);

		linkObj[m].style.position = 'absolute';
		linkObj[m].style.width = (w - w * 0.01) + 'px';
		linkObj[m].style.height = (w * .0345) + 'px';
		linkObj[m].style.left = - (w - w * 0.01) + 'px';
		linkObj[m].style.top = topVar + (w * 0.005) + (m * w * 0.038) + 'px';
		linkObj[m].style.backgroundImage = 'linear-gradient(to left, rgba(25,25,112,0.05), transparent)';
		linkObj[m].style.cursor = 'pointer';


		linkObj[m].moveRight = function(s) {
			this.style.left = s +'px';
		}

		linkObj[m].onmouseover = function() {
			this.style.backgroundImage = 'linear-gradient(to left, rgba(25,25,112,0.3), transparent';
		}

		linkObj[m].onmouseout = function() {
			this.style.backgroundImage = 'linear-gradient(to left, rgba(25,25,112,0.05), transparent)';
		}

		linkObj[m].onclick = function() {
			window.open(LinkArray[m].link);
    	};


	}
})();


(function(){							// перемещаем вправо элемент ссылки (контакты) с задержкой в 1s
	let n = - (w - w * 0.01),
	i = 0,
	timerId = setTimeout(
		function() {
			let IntervalId = setInterval(
				function() {
					linkObj[i].moveRight(n);
					n += 25;
					if (n > (leftVar + w * 0.005)) {
						linkObj[i].moveRight(leftVar + w * 0.005);
						n = - (w - w * 0.01);
						i++;
					};
					if (i === 9) clearInterval(IntervalId);
				},
			1);
		},
	1500);
})();

	var coverPhotoBorder = document.createElement('div');
	document.body.appendChild(coverPhotoBorder);

		coverPhotoBorder.style.position = 'absolute';
		coverPhotoBorder.style.width = w * 0.17 + 'px';
		coverPhotoBorder.style.height = w * 0.17 + 'px';
		coverPhotoBorder.style.left = - (w - w * 0.01) + 'px';
		coverPhotoBorder.style.top = w * 0.25 + 'px';
		// coverPhotoBorder.style.backgroundColor = 'white';
		coverPhotoBorder.style.border = w * 0.001 + 'px solid midnightblue';

		coverPhotoBorder.moveRight = function(s) {
			this.style.left = s +'px';
		}

	var coverPhoto = document.createElement('div');
	coverPhotoBorder.appendChild(coverPhoto);

		coverPhoto.style.width = w * 0.16 + 'px';
		coverPhoto.style.height = w * 0.16 + 'px';
		coverPhoto.style.backgroundSize = 'cover';
		coverPhoto.style.backgroundImage = 'url(photo.jpg)';
		coverPhoto.style.border = w * 0.005 + 'px solid white';


(function(){							// перемещаем вправо элемент фото с задержкой в 2s
	let n = - (w - w * 0.01),
	i = 0,
	timerId = setTimeout(
		function() {
			let IntervalId = setInterval(
				function() {
					coverPhotoBorder.moveRight(n);
					n += 25;
					if (n > (leftVar + w * 0.05)) {
						coverPhotoBorder.moveRight(leftVar + w * 0.05);
						clearInterval(IntervalId);
					};
				},
			20);
		},
	2500);
})();