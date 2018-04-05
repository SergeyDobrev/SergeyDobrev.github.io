(function() {
	var myArray = ['ajax-main.txt', 'ajax-links.txt', 'ajax-skills.txt', 'ajax-project.txt'];

	for (var n = 0; n < myArray.length; n++) {
		AjaxFun(myArray[n]);
	}

	function AjaxFun(textFile) {
		var xhr = new XMLHttpRequest(); 
		xhr.open("GET",textFile,true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var obj = JSON.parse(xhr.responseText);
				for (var i = 0; i < obj.length; i++) {

					var tmp = document.createElement(obj[i].tagVal);
					$(obj[i].parrentVal).append(tmp);
					$(tmp).attr(obj[i].attrVal);

					if (obj[i].textVal != undefined ) $(tmp).text(obj[i].textVal);

					if (obj[i].attrVal.class === 'skillItemName') {

						for (var j = 0; j < 10; j++) {

							var skl = document.createElement('div');
							$(obj[i].parrentVal).append(skl);

							if (j < obj[i].levelVal) $(skl).addClass('skillLevel green');
							else $(skl).addClass('skillLevel');
						}
					}
				}
			}


		}
	}


})();