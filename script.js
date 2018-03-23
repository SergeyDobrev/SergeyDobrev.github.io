var myArray =  [['main'],
				['coverFon'],
				['fio']];

for (var i = 0; i < myArray.length; i++) {
	var obj0 = document.createElement('div');
		if (i === 0) {
			$('body').append(obj0);
		} else {
			var a = '.' + myArray[i - 1][0];
			console.log(a);
			$(a).append(obj0);			
		}
	$(obj0).addClass(myArray[i][0]);
}
	$(obj0).text('Sergey Dobrev');	

var linkArray = [['tel:+380503348863', 'my telephone', '+38(050)3348863', 'linkicon ion-ios-telephone-outline telephone'],
				 ['mailto:sergey_dobrev@ukr.net', 'my ukrnet mail', 'sergey_dobrev@ukr.net', 'linkicon ion-ios-email-outline ukrnet'],
				 ['mailto:sergey_dobrev@ukr.net', 'my ukrnet mail', 'sergey_dobrev@ukr.net', 'linkicon ion-ios-email-outline ukrnet'],
				 ['mailto:sergey_dobrev@ukr.net', 'my ukrnet mail', 'sergey_dobrev@ukr.net', 'linkicon ion-ios-email-outline ukrnet'],
				 ['mailto:sergey_dobrev@ukr.net', 'my ukrnet mail', 'sergey_dobrev@ukr.net', 'linkicon ion-ios-email-outline ukrnet'],
				 ['mailto:sergey_dobrev@ukr.net', 'my ukrnet mail', 'sergey_dobrev@ukr.net', 'linkicon ion-ios-email-outline ukrnet'],
				 ['mailto:sergey_dobrev@ukr.net', 'my ukrnet mail', 'sergey_dobrev@ukr.net', 'linkicon ion-ios-email-outline ukrnet'],
				 ['mailto:sergey_dobrev@ukr.net', 'my ukrnet mail', 'sergey_dobrev@ukr.net', 'linkicon ion-ios-email-outline ukrnet'],
				 ['mailto:sergey_dobrev@ukr.net', 'my ukrnet mail', 'sergey_dobrev@ukr.net', 'linkicon ion-ios-email-outline ukrnet'],
				 ];

for (var i = 0; i < linkArray.length; i++) {
	var obj = document.createElement('a');
	$('.coverFon').append(obj);
	$(obj).addClass('linkbox');
	$(obj).attr({
					href: linkArray[i][0],
					title: linkArray[i][1]
				});	

	var obj1 = document.createElement('div');
	$(obj).append(obj1);
	$(obj1).addClass('linktext');
	$(obj1).text(linkArray[i][2]);	

	var obj2 = document.createElement('div');
	$(obj).append(obj2);
	$(obj2).addClass(linkArray[i][3]);
}

