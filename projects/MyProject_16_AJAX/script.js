(function() {
	var objAjax;
	var xhr = new XMLHttpRequest(); 
	xhr.open("GET","ajax.txt",true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var obj = JSON.parse(xhr.responseText);
			objAjax = obj;
			myFun();
		}
	}

	function myFun() {
		for (var i = 0; i < objAjax[0][0].length; i++) {
			var obj0 = document.createElement('div');
			$(objAjax[0][1][i]).append(obj0);
			$(obj0).addClass(objAjax[0][0][i]);
		}
		$(objAjax[0][2][0]).text(objAjax[0][2][1]);	

		for (var i = 0; i < objAjax[1].length; i++) {
			var obj1 = document.createElement('a');
			$('.coverFon').append(obj1);
			$(obj1).attr(objAjax[1][i][0]);	

			var obj2 = document.createElement('div');
			$(obj1).append(obj2);
			$(obj2).attr(objAjax[1][i][1]);	
			$(obj2).text(objAjax[1][i][1].text);
			if (objAjax[1][i][0].title === 'my linkedin') $(obj2).text('linkedin.com/in/sergey-dobrev'); // 'linkedin.com/in/sergey&#8209;dobrev'

			var obj3 = document.createElement('div');
			$(obj1).append(obj3);
			$(obj3).attr(objAjax[1][i][2]);	
		}
			var obj4 = document.createElement('div');
			$(objAjax[0][1][1]).append(obj4);
			$(obj4).addClass('skillsBlock');

			var obj5 = document.createElement('div');
			$(obj4).append(obj5);
			$(obj5).addClass('skillsTitle');
			$(obj5).text('my Skills & Certificates');

			var obj4 = document.createElement('div');
			$(objAjax[0][1][1]).append(obj4);
			$(obj4).addClass('skillsBlock');

			var obj5 = document.createElement('div');
			$(obj4).append(obj5);
			$(obj5).addClass('skillsTitle');
			$(obj5).text('my Projects');
	}

})();