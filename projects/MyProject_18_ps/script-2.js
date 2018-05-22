document.getElementById('cv').onclick = function() {
	window.open('https://sergeydobrev.github.io/CV_Sergey_Dobrev.pdf');
};

var obj = document.getElementById('certJS')
obj.onclick = function() {
	window.open('http://testprovider.com/ru/Certificate/Search/TP80906377');
};

obj.onmouseover = function() {
	// $(obj).animate(
	// 		{
	// 		backgroundImage: linearGgradient(to right, rgba(25,25,112,0.2), rgba(25,25,112,0.2) 50%, transparent);
	// 		},
	// 	5000);
	console.log('onmouseover');

};

obj.onmouseout = function() {
	console.log('onmouseout');

};


// onmouseover - срабатывает, когда курсор мыши появляется над объектом
// onmousemove - происходит, когда мы двигаем курсором мыши над объектом.
// onmouseout - срабатывает, когда курсор мыши уходит за пределы объекта.