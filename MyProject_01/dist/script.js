'use strict';

$(document).ready(function () {
	var numBlocksArrayData1x = [0, 28, 56, 84, 112, 140, 28, 56, 84, 112, 28, 0, 28, 56, 84, 112, 140, 140, 140];
	var numBlocksArrayData1y = [28, 0, 0, 0, 0, 28, 56, 56, 56, 56, 112, 140, 140, 140, 140, 140, 140, 112, 168];

	var numBlocksArrayData2x = [0, 28, 56, 84, 112, 140, 28, 56, 84, 112, 28, 0, 28, 56, 84, 112, 140, 140, 140];
	var numBlocksArrayData2y = [28, 0, 0, 0, 0, 28, 56, 56, 56, 56, 112, 140, 168, 168, 140, 112, 112, 140, 168];

	var numBlocksArrayData3x = [0, 28, 56, 84, 112, 140, 28, 56, 84, 112, 0, 0, 0, 28, 56, 84, 112, 140, 112];
	var numBlocksArrayData3y = [28, 0, 0, 0, 0, 28, 56, 56, 56, 56, 112, 140, 168, 168, 140, 168, 168, 140, 112];

	var numBlocksArrayData4x = [0, 28, 56, 84, 112, 140, 28, 56, 84, 112, 28, 56, 84, 84, 0, 28, 56, 84, 112, 140];
	var numBlocksArrayData4y = [28, 0, 0, 0, 0, 28, 56, 56, 56, 56, 140, 112, 112, 140, 168, 168, 168, 168, 168, 168];

	var numBlocksArrayData5x = [0, 28, 56, 84, 112, 140, 28, 56, 84, 112, 0, 0, 0, 28, 56, 56, 84, 112, 112, 140];
	var numBlocksArrayData5y = [28, 0, 0, 0, 0, 28, 56, 56, 56, 56, 112, 140, 168, 112, 112, 140, 168, 168, 112, 140];

	var numBlocksArrayData6x = [0, 28, 56, 84, 112, 140, 28, 56, 84, 112, 28, 0, 28, 56, 84, 112, 140, 112, 84];
	var numBlocksArrayData6y = [28, 0, 0, 0, 0, 28, 56, 56, 56, 56, 168, 140, 112, 112, 112, 112, 140, 168, 140];

	var numBlocksArrayData7x = [0, 28, 56, 84, 112, 140, 28, 56, 84, 112, 0, 0, 0, 28, 56, 84, 112, 140];
	var numBlocksArrayData7y = [28, 0, 0, 0, 0, 28, 56, 56, 56, 56, 112, 140, 168, 168, 168, 140, 112, 112];

	var numBlocksArray1 = new Array();
	crNumBlocks(numBlocksArray1, numBlocksArrayData1x, numBlocksArrayData1y, '#numberbox1');

	var numBlocksArray2 = new Array();
	crNumBlocks(numBlocksArray2, numBlocksArrayData2x, numBlocksArrayData2y, '#numberbox2');

	var numBlocksArray3 = new Array();
	crNumBlocks(numBlocksArray3, numBlocksArrayData3x, numBlocksArrayData3y, '#numberbox3');

	var numBlocksArray4 = new Array();
	crNumBlocks(numBlocksArray4, numBlocksArrayData4x, numBlocksArrayData4y, '#numberbox4');

	var numBlocksArray5 = new Array();
	crNumBlocks(numBlocksArray5, numBlocksArrayData5x, numBlocksArrayData5y, '#numberbox5');

	var numBlocksArray6 = new Array();
	crNumBlocks(numBlocksArray6, numBlocksArrayData6x, numBlocksArrayData6y, '#numberbox6');

	var numBlocksArray7 = new Array();
	crNumBlocks(numBlocksArray7, numBlocksArrayData7x, numBlocksArrayData7y, '#numberbox7');

	function crNumBlocks(ar, nbadx, nbady, bid) {

		for (var i = 0; i < nbadx.length; i++) {

			ar[i] = document.createElement("div");
			$(bid).append(ar[i]);
			$(ar[i]).addClass('numberbox11');

			var c = Math.floor(Math.random() * 200);
			if (i % 4 === 0) {
				var a = (c + 50) * -1;var b = (c + 50) * -1;
			} else if (i % 4 === 1) {
				var a = (c + 50) * -1;var b = c + 50;
			} else if (i % 4 === 2) {
				var a = c + 50;var b = (c + 50) * -1;
			} else if (i % 4 === 3) {
				var a = c + 50;var b = c + 50;
			}

			$(ar[i]).css({ "top": nbadx[i] + a + "px", "left": nbady[i] + b + "px" });
		}
	}

	$('body,html').animate({ scrollTop: 32 }, 1000);
	$('#focus1').focus();

	$('#mindex1').fadeIn(1500);
	setTimeout(rotateCube, 1500, '#mrotate01');
	setTimeout(function () {
		$('#mindex2').slideDown(1500);
	}, 2500);
	setTimeout(function () {
		$('#mindex3').slideDown(1500);
		$('#mindex4').fadeIn(1500);
		$('#mindex5').slideDown(1500);
	}, 4000);
	setTimeout(openNum, 5500, numBlocksArray1, numBlocksArrayData1x, numBlocksArrayData1y);

	$(window).scroll(function () {

		var obj = document.querySelector('.main');
		var elemRect = obj.getBoundingClientRect();

		console.log(elemRect.top);

		// Level 1
		if (elemRect.top < -100 && elemRect.top > -800 && $('#mindex1').css('display') === 'none') {
			$('#focus1').focus();
			closeNum(numBlocksArray7, numBlocksArrayData7x, numBlocksArrayData7y);
			$('#mindex1').fadeIn(1500);
			setTimeout(rotateCube, 1500, '#mrotate02');
			$('#mindex17').css('display', 'none');
		}
		if (elemRect.top < -200 && elemRect.top > -1200 && $('#mindex2').css('display') === 'none') {
			$('#mindex2').slideDown(1500);
			$('#mindex27').css('display', 'none');
		}
		if (elemRect.top < -250 && elemRect.top > -1250 && $('#mindex3').css('display') === 'none') {
			$('#mindex3').slideDown(1500);
			$('#mindex4').fadeIn(1500);
			$('#mindex5').slideDown(1500);
			setTimeout(openNum, 1500, numBlocksArray1, numBlocksArrayData1x, numBlocksArrayData1y);
			$('#mindex37').css('display', 'none');
			$('#mindex47').css('display', 'none');
			$('#mindex57').css('display', 'none');
		}
		if (elemRect.top < -300 && elemRect.top > -1300 && $('#mindex6').css('display') === 'none') {
			$('#mindex6').slideDown(1500);
			$('#mindex67').css('display', 'none');
			$('#mindex28').css('display', 'none');
			$('#mindex18').css('display', 'none');
			$('.rotateside').css('display', 'none');
		}

		// Level 2
		if (elemRect.top < -400 && elemRect.top > -1400 && $('#mindex12').css('display') === 'none') {
			$('#focus2').focus();
			closeNum(numBlocksArray1, numBlocksArrayData1x, numBlocksArrayData1y);
			closeNum(numBlocksArray3, numBlocksArrayData3x, numBlocksArrayData3y);
			$('#mindex12').fadeIn(1500);
			setTimeout(rotateCube, 1500, '#mrotate02');
			$('#mindex1').css('display', 'none');
			$('#mindex13').css('display', 'none');
		}
		if (elemRect.top < -600 && elemRect.top > -1600 && $('#mindex22').css('display') === 'none') {
			$('#mindex22').slideDown(1500);
			$('#mindex2').css('display', 'none');
			$('#mindex23').css('display', 'none');
		}
		if (elemRect.top < -1000 && elemRect.top > -2000 && $('#mindex32').css('display') === 'none') {
			$('#mindex32').slideDown(1500);
			$('#mindex42').fadeIn(1500);
			$('#mindex52').slideDown(1500);
			setTimeout(openNum, 1500, numBlocksArray2, numBlocksArrayData2x, numBlocksArrayData2y);
			$('#mindex3').css('display', 'none');
			$('#mindex4').css('display', 'none');
			$('#mindex5').css('display', 'none');
			$('#mindex33').css('display', 'none');
			$('#mindex43').css('display', 'none');
			$('#mindex53').css('display', 'none');
		}
		if (elemRect.top < -1400 && elemRect.top > -2400 && $('#mindex62').css('display') === 'none') {
			$('#mindex62').slideDown(1500);
			$('#mindex6').css('display', 'none');
			$('#mindex63').css('display', 'none');
		}

		// Level 3
		if (elemRect.top < -1500 && elemRect.top > -2500 && $('#mindex13').css('display') === 'none') {
			$('#focus3').focus();
			closeNum(numBlocksArray2, numBlocksArrayData2x, numBlocksArrayData2y);
			closeNum(numBlocksArray4, numBlocksArrayData4x, numBlocksArrayData4y);
			$('#mindex13').fadeIn(1500);
			setTimeout(rotateCube, 1500, '#mrotate03');
			$('#mindex12').css('display', 'none');
			$('#mindex14').css('display', 'none');
		}
		if (elemRect.top < -1700 && elemRect.top > -2700 && $('#mindex23').css('display') === 'none') {
			$('#mindex23').slideDown(1500);
			$('#mindex22').css('display', 'none');
			$('#mindex24').css('display', 'none');
		}
		if (elemRect.top < -2100 && elemRect.top > -3100 && $('#mindex33').css('display') === 'none') {
			$('#mindex33').slideDown(1500);
			$('#mindex43').fadeIn(1500);
			$('#mindex53').slideDown(1500);
			setTimeout(openNum, 1500, numBlocksArray3, numBlocksArrayData3x, numBlocksArrayData3y);
			$('#mindex32').css('display', 'none');
			$('#mindex42').css('display', 'none');
			$('#mindex52').css('display', 'none');
			$('#mindex34').css('display', 'none');
			$('#mindex44').css('display', 'none');
			$('#mindex54').css('display', 'none');
		}
		if (elemRect.top < -2500 && elemRect.top > -3500 && $('#mindex63').css('display') === 'none') {
			$('#mindex63').slideDown(1500);
			$('#mindex62').css('display', 'none');
			$('#mindex64').css('display', 'none');
		}

		// Level 4
		if (elemRect.top < -2600 && elemRect.top > -3600 && $('#mindex14').css('display') === 'none') {
			$('#focus4').focus();
			closeNum(numBlocksArray3, numBlocksArrayData3x, numBlocksArrayData3y);
			closeNum(numBlocksArray5, numBlocksArrayData5x, numBlocksArrayData5y);
			$('#mindex14').fadeIn(1500);
			setTimeout(rotateCube, 1500, '#mrotate04');
			$('#mindex13').css('display', 'none');
			$('#mindex15').css('display', 'none');
		}
		if (elemRect.top < -2800 && elemRect.top > -3800 && $('#mindex24').css('display') === 'none') {
			$('#mindex24').slideDown(1500);
			$('#mindex23').css('display', 'none');
			$('#mindex25').css('display', 'none');
		}
		if (elemRect.top < -3200 && elemRect.top > -4200 && $('#mindex34').css('display') === 'none') {
			$('#mindex34').slideDown(1500);
			$('#mindex44').fadeIn(1500);
			$('#mindex54').slideDown(1500);
			setTimeout(openNum, 1500, numBlocksArray4, numBlocksArrayData4x, numBlocksArrayData4y);
			$('#mindex33').css('display', 'none');
			$('#mindex43').css('display', 'none');
			$('#mindex53').css('display', 'none');
			$('#mindex35').css('display', 'none');
			$('#mindex45').css('display', 'none');
			$('#mindex55').css('display', 'none');
		}
		if (elemRect.top < -3600 && elemRect.top > -4600 && $('#mindex64').css('display') === 'none') {
			$('#mindex64').slideDown(1500);
			$('#mindex63').css('display', 'none');
			$('#mindex65').css('display', 'none');
		}

		// Level 5
		if (elemRect.top < -3700 && elemRect.top > -4700 && $('#mindex15').css('display') === 'none') {
			$('#focus5').focus();
			closeNum(numBlocksArray4, numBlocksArrayData4x, numBlocksArrayData4y);
			closeNum(numBlocksArray6, numBlocksArrayData6x, numBlocksArrayData6y);
			$('#mindex15').fadeIn(1500);
			setTimeout(rotateCube, 1500, '#mrotate05');
			$('#mindex14').css('display', 'none');
			$('#mindex16').css('display', 'none');
		}
		if (elemRect.top < -3900 && elemRect.top > -4900 && $('#mindex25').css('display') === 'none') {
			$('#mindex25').slideDown(1500);
			$('#mindex24').css('display', 'none');
			$('#mindex26').css('display', 'none');
		}
		if (elemRect.top < -4200 && elemRect.top > -5300 && $('#mindex35').css('display') === 'none') {
			$('#mindex35').slideDown(1500);
			$('#mindex45').fadeIn(1500);
			$('#mindex55').slideDown(1500);
			setTimeout(openNum, 1500, numBlocksArray5, numBlocksArrayData5x, numBlocksArrayData5y);
			$('#mindex34').css('display', 'none');
			$('#mindex44').css('display', 'none');
			$('#mindex54').css('display', 'none');
			$('#mindex36').css('display', 'none');
			$('#mindex46').css('display', 'none');
			$('#mindex56').css('display', 'none');
		}
		if (elemRect.top < -4700 && elemRect.top > -5700 && $('#mindex65').css('display') === 'none') {
			$('#mindex65').slideDown(1500);
			$('#mindex64').css('display', 'none');
			$('#mindex66').css('display', 'none');
		}

		// Level 6
		if (elemRect.top < -4800 && elemRect.top > -5800 && $('#mindex16').css('display') === 'none') {
			$('#focus6').focus();
			closeNum(numBlocksArray5, numBlocksArrayData5x, numBlocksArrayData5y);
			closeNum(numBlocksArray7, numBlocksArrayData7x, numBlocksArrayData7y);
			$('#mindex16').fadeIn(1500);
			setTimeout(rotateCube, 1500, '#mrotate06');
			$('#mindex15').css('display', 'none');
			$('#mindex17').css('display', 'none');
		}
		if (elemRect.top < -5000 && elemRect.top > -6000 && $('#mindex26').css('display') === 'none') {
			$('#mindex26').slideDown(1500);
			$('#mindex25').css('display', 'none');
			$('#mindex27').css('display', 'none');
		}
		if (elemRect.top < -5300 && elemRect.top > -6400 && $('#mindex36').css('display') === 'none') {
			$('#mindex36').slideDown(1500);
			$('#mindex46').fadeIn(1500);
			$('#mindex56').slideDown(1500);
			setTimeout(openNum, 1500, numBlocksArray6, numBlocksArrayData6x, numBlocksArrayData6y);
			$('#mindex35').css('display', 'none');
			$('#mindex45').css('display', 'none');
			$('#mindex55').css('display', 'none');
			$('#mindex37').css('display', 'none');
			$('#mindex47').css('display', 'none');
			$('#mindex57').css('display', 'none');
		}
		if (elemRect.top < -5800 && elemRect.top > -6800 && $('#mindex66').css('display') === 'none') {
			$('#mindex66').slideDown(1500);
			$('#mindex65').css('display', 'none');
			$('#mindex67').css('display', 'none');
			$('#mindex28').css('display', 'none');
			$('#mindex18').css('display', 'none');
			$('.rotateside').css('display', 'none');
		}

		// Level 7
		if (elemRect.top < -5900 && elemRect.top > -6900 && $('#mindex17').css('display') === 'none') {
			$('#focus7').focus();
			closeNum(numBlocksArray6, numBlocksArrayData6x, numBlocksArrayData6y);
			$('#mindex17').fadeIn(1500);
			setTimeout(rotateCube, 1500, '#mrotate07');
			$('#mindex16').css('display', 'none');
		}
		if (elemRect.top < -6100 && elemRect.top > -7100 && $('#mindex27').css('display') === 'none') {
			$('#mindex27').slideDown(1500);
			$('#mindex26').css('display', 'none');
		}
		if (elemRect.top < -6400 && elemRect.top > -7500 && $('#mindex37').css('display') === 'none') {
			$('#mindex37').slideDown(1500);
			$('#mindex47').fadeIn(1500);
			$('#mindex57').slideDown(1500);
			setTimeout(openNum, 1500, numBlocksArray7, numBlocksArrayData7x, numBlocksArrayData7y);
			$('#mindex36').css('display', 'none');
			$('#mindex46').css('display', 'none');
			$('#mindex56').css('display', 'none');
		}
		if (elemRect.top < -6900 && elemRect.top > -7500 && $('#mindex67').css('display') === 'none') {
			$('#mindex67').slideDown(1500);
			$('#mindex66').css('display', 'none');
		}

		// end Level 
		if (elemRect.top < -7000 && elemRect.top > -7500 && $('#mindex18').css('display') === 'none') {
			closeNum(numBlocksArray7, numBlocksArrayData7x, numBlocksArrayData7y);
			$('#mindex28').slideDown(1500);
			setTimeout(function () {
				$('#mindex18').fadeIn(1500);
			}, 1500);
			//setTimeout(rotateCube, 3500, '#mrotate08');
			setTimeout(function () {
				$('.rotateside').fadeIn(1500);
			}, 1500);
		}
	});

	function openNum(ar, nbadx, nbady) {
		for (var i = 0; i < ar.length; i++) {
			$(ar[i]).fadeIn().animate({ "top": nbadx[i] + "px", "left": nbady[i] + "px" }, { queue: false });
		}
	}

	function closeNum(ar, nbadx, nbady) {
		for (var i = 0; i < ar.length; i++) {
			var c = Math.floor(Math.random() * 200);

			if (i % 4 === 0) {
				var a = (c + 50) * -1;var b = (c + 50) * -1;
			} else if (i % 4 === 1) {
				var a = (c + 50) * -1;var b = c + 50;
			} else if (i % 4 === 2) {
				var a = c + 50;var b = (c + 50) * -1;
			} else if (i % 4 === 3) {
				var a = c + 50;var b = c + 50;
			}

			$(ar[i]).fadeOut().animate({ "top": nbadx[i] + a + "px", "left": nbady[i] + b + "px" }, { queue: false });
		}
	}

	function rotateCube(m) {

		var TimerId = null;
		clearTimeout(TimerId);

		var x = 0;
		var y = 0;

		for (var i = 0; i < 181; i++) {
			t = 5 * i;
			TimerId = setTimeout(myfun, t, i);
		}

		function myfun(i) {
			document.querySelector(m).style.transform = "rotateX(" + y + i * 2 + "deg)" + "rotateY(" + x + i + "deg)" + "rotateZ(45deg)";
		}
	}

	$(".menu").on("click", "a", function (e) {
		e.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
		var id = $(this).attr('href'),
		    //забираем идентификатор бока с атрибута href
		top = $(id).offset().top - 34; //узнаем высоту от начала страницы до блока на который ссылается якорь
		$('body,html').animate({ scrollTop: top }, 1000); //анимируем переход на расстояние - top за 1500 мс
	});
});