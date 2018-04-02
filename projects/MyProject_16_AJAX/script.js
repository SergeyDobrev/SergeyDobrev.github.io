(function() {
	var objAjax;
	var xhr = new XMLHttpRequest(); 
	xhr.open("GET","ajax.txt",true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var obj = JSON.parse(xhr.responseText);
			console.log(obj.length);
			for (var i = 0; i < obj.length; i++) {
				var tmp = document.createElement(obj[i].tagVar);
				$(obj[i].parrentVar).append(tmp);
				$(tmp).attr(obj[i].attrVar);	
				$(tmp).text(obj[i].textVar);
			}
		}
	}
})();