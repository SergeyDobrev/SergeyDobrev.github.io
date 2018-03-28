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
			$(obj0).attr(objAjax[0][0][i]);

		}
		$(objAjax[0][2][0]).text(objAjax[0][2][1]);	

		for (var i = 0; i < objAjax[1].length; i++) {
			var obj1 = document.createElement('a');
			$(objAjax[0][1][2]).append(obj1);
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
			$(obj4).attr(objAjax[2][0]);

			var obj5 = document.createElement('div');
			$(obj4).append(obj5);
			$(obj5).attr(objAjax[2][1]);
			$(obj5).text(objAjax[3][0]);

			var obj6 = document.createElement('div');
			$(objAjax[0][1][1]).append(obj6);
			$(obj6).attr(objAjax[2][0]);

			var obj7 = document.createElement('div');
			$(obj6).append(obj7);
			$(obj7).attr(objAjax[2][1]);
			$(obj7).text(objAjax[3][1]);	

		for (var i = 0; i < objAjax[4].length; i++) {
			var obj8 = document.createElement('a');
			$(obj4).append(obj8);
			$(obj8).attr(objAjax[4][i][0]);

			var obj9 = document.createElement('div');
			$(obj8).append(obj9);
			$(obj9).attr(objAjax[4][i][1]);								
			$(obj9).text(objAjax[4][i][1].text);
			for (var j = 0; j < 10; j++) {
				var obj10 = document.createElement('div');
				$(obj8).append(obj10);
				if (j < objAjax[4][i][2]) {
					$(obj10).addClass('skillLevel green');								
				} else {
					$(obj10).addClass('skillLevel');								
				}
			}
		}	
	}

})();