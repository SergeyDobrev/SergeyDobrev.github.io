var x = 0;
var y = 0;
var z = 300;

var a = 0;
var b = 0;
var g = 0;

var figure_obj = new Object();

var color_array = ["255,0,0","0,255,0","0,0,255","255,255,0","255,0,255","0,255,255","255,255,255", "255,0,0"];
var figure_array = [[["0","-90deg","0","0","0","50px",true,true,true,true], 	/*left*/
					["0","90deg","0","0","0","50px",true,true,true,true],   	/*right*/
					["90deg","0","0","0","0","50px",true,true,true,true],		/*top*/
					["-90deg","0","0","0","0","50px",true,true,true,true],		/*bottom*/
					["0","0","0","0","0","50px",true,true,true,true],			/*front*/
					["0","180deg","0","0","0","50px",true,true,true,true]],		/*back*/

					[["0","-90deg","0","0","0","50px",true,true,true,true],
					["0","90deg","0","0","0","150px",true,true,true,true],
					["90deg","0","0","0","0","50px",true,false,true,true],
					["90deg","0","0","100px","0","50px",false,true,true,true],
					["-90deg","0","0","0","0","50px",true,false,true,true],
					["-90deg","0","0","100px","0","50px",false,true,true,true],
					["0","0","0","0","0","50px",true,false,true,true],
					["0","0","0","100px","0","50px",false,true,true,true],
					["0","180deg","0","0","0","50px",false,true,true,true],
					["0","180deg","0","-100px","0","50px",true,false,true,true]],

					[["0","-90deg","0","0","0","150px",true,true,true,true],
					["0","90deg","0","0","0","150px",true,true,true,true],
					["90deg","0","0","0","0","50px",false,false,true,true],
					["90deg","0","0","100px","0","50px",false,true,true,true],
					["90deg","0","0","-100px","0","50px",true,false,true,true],
					["-90deg","0","0","0","0","50px",false,false,true,true],
					["-90deg","0","0","100px","0","50px",false,true,true,true],
					["-90deg","0","0","-100px","0","50px",true,false,true,true],
					["0","0","0","0","0","50px",false,false,true,true],
					["0","0","0","100px","0","50px",false,true,true,true],
					["0","0","0","-100px","0","50px",true,false,true,true],					
					["0","180deg","0","0","0","50px",false,false,true,true],
					["0","180deg","0","-100px","0","50px",true,false,true,true],
					["0","180deg","0","100px","0","50px",false,true,true,true]],

					[["0","-90deg","0","0","0","50px",true,true,true,false],
					["0","-90deg","0","0","100px","50px",true,true,false,true],					
					["0","90deg","0","0","0","150px",true,true,true,true],
					["0","90deg","0","0","100px","50px",true,true,true,true],
					["90deg","0","0","0","0","50px",true,false,true,true],
					["90deg","0","0","100px","0","50px",false,true,true,true],
					["-90deg","0","0","0","0","150px",true,true,true,true],
					["-90deg","0","0","100px","0","50px",true,true,true,true],
					["0","0","0","0","100px","50px",true,true,false,true],
					["0","0","0","100px","0","50px",false,true,true,true],
					["0","0","0","0","0","50px",true,false,true,false],
					["0","180deg","0","0","0","50px",false,true,true,false],
					["0","180deg","0","-100px","0","50px",true,false,true,true],
					["0","180deg","0","0","100px","50px",true,true,false,true]],

					[["0","-90deg","0","0","0","50px",true,true,true,false], 	/*left*/
					["0","-90deg","0","0","100px","50px",true,true,false,true], 		/*left*/
					["0","90deg","0","0","0","150px",true,true,true,false],   	/*right*/
					["0","90deg","0","0","100px","150px",true,true,false,true],   	/*right*/
					["90deg","0","0","0","0","50px",true,false,true,true],		/*top*/
					["90deg","0","0","100px","0","50px",false,true,true,true],		/*top*/
					["-90deg","0","0","0","0","150px",true,false,true,true],		/*bottom*/
					["-90deg","0","0","100px","0","150px",false,true,true,true],		/*bottom*/
					["0","0","0","0","0","50px",true,false,true,false],			/*front*/
					["0","0","0","0","100px","50px",true,false,false,true],			/*front*/
					["0","0","0","100px","0","50px",false,true,true,false],			/*front*/
					["0","0","0","100px","100px","50px",false,true,false,true],			/*front*/
					["0","180deg","0","0","0","50px",false,true,true,false],		/*back*/
					["0","180deg","0","-100px","0","50px",true,false,true,false],		/*back*/
					["0","180deg","0","-100px","100px","50px",true,false,false,true],		/*back*/
					["0","180deg","0","0","100px","50px",false,true,false,true]],		/*back*/

					[["0","-90deg","0","0","0","150px",true,true,true,true], 	/*left*/
					["0","-90deg","0","0","100px","50px",true,true,true,true], 		/*left*/
					["0","90deg","0","0","0","50px",true,true,true,true],   	/*right*/
					["0","90deg","0","0","100px","150px",true,true,true,true],   	/*right*/
					["90deg","0","0","0","0","50px",false,true,true,true],		/*top*/
					["90deg","0","0","100px","0","-50px",true,true,true,true],		/*top*/
					["90deg","0","0","-100px","0","50px",true,false,true,true],		/*top*/
					["-90deg","0","0","-100px","0","50px",true,true,true,true],		/*bottom*/
					["-90deg","0","0","0","0","150px",true,false,true,true],		/*bottom*/
					["-90deg","0","0","100px","0","150px",false,true,true,true],		/*bottom*/
					["0","0","0","0","0","50px",false,true,true,false],			/*front*/
					["0","0","0","0","100px","50px",true,false,false,true],			/*front*/
					["0","0","0","100px","100px","50px",false,true,false,true],			/*front*/
					["0","0","0","-100px","0","50px",true,false,true,true],			/*front*/
					["0","180deg","0","0","0","50px",true,false,true,false],		/*back*/
					["0","180deg","0","100px","0","50px",false,true,true,true],		/*back*/
					["0","180deg","0","0","100px","50px",false,true,false,true],		/*back*/
					["0","180deg","0","-100px","100px","50px",true,false,true,true]],		/*back*/

					[["0","-90deg","0","0","0","50px",true,true,true,false], 	/*left*/
					["0","-90deg","0","0","100px","50px",true,true,false,true], 	/*left*/
					["0","90deg","0","0","0","250px",true,true,true,true],   	/*right*/
					["0","90deg","0","0","100px","50px",true,true,true,true],   	/*right*/
					["90deg","0","0","200px","0","50px",false,true,true,true],		/*top*/
					["90deg","0","0","100px","0","50px",false,false,true,true],		/*top*/
					["90deg","0","0","0","0","50px",true,false,true,true],		/*top*/
					["-90deg","0","0","0","0","150px",true,true,true,true],		/*bottom*/
					["-90deg","0","0","200px","0","50px",false,true,true,true],		/*bottom*/
					["-90deg","0","0","100px","0","50px",true,false,true,true],		/*bottom*/
					["0","0","0","0","0","50px",true,false,true,false],			/*front*/
					["0","0","0","0","100px","50px",true,true,false,true],			/*front*/
					["0","0","0","200px","0","50px",false,true,true,true],			/*front*/
					["0","0","0","100px","0","50px",false,false,true,true],			/*front*/
					["0","180deg","0","0","0","50px",false,true,true,false],		/*back*/
					["0","180deg","0","0","100px","50px",true,true,false,true],		/*back*/
					["0","180deg","0","-200px","0","50px",true,false,true,true],		/*back*/
					["0","180deg","0","-100px","0","50px",false,false,true,true]],		/*back*/

					[["0","-90deg","0","0","0","150px",true,true,true,true], 	/*left*/
					["0","-90deg","0","0","-100px","50px",true,true,true,true], 	/*left*/
					["0","90deg","0","0","0","150px",true,true,true,true],   	/*right*/
					["0","90deg","0","0","-100px","50px",true,true,true,true],   	/*right*/
					["90deg","0","0","0","0","150px",true,true,true,true],		/*top*/
					["90deg","0","0","100px","0","50px",true,true,true,true],		/*top*/
					["90deg","0","0","-100px","0","50px",true,true,true,true],		/*top*/
					["-90deg","0","0","0","0","50px",false,false,true,true],		/*bottom*/
					["-90deg","0","0","-100px","0","50px",true,false,true,true],		/*bottom*/
					["-90deg","0","0","100px","0","50px",false,true,true,true],		/*bottom*/
					["0","0","0","0","0","50px",false,false,false,true],			/*front*/
					["0","0","0","0","-100px","50px",true,true,true,false],			/*front*/
					["0","0","0","100px","0","50px",false,true,true,true],			/*front*/
					["0","0","0","-100px","0","50px",true,false,true,true],			/*front*/
					["0","180deg","0","0","0","50px",false,false,false,true],		/*back*/
					["0","180deg","0","0","-100px","50px",true,true,true,false],		/*back*/
					["0","180deg","0","100px","0","50px",false,true,true,true],		/*back*/
					["0","180deg","0","-100px","0","50px",true,false,true,true]]];		/*back*/

	




function create_figure(n) {
	x = 100;
	y = 100;
	z = 300;
	a = 0;
	b = 0;
	g = 0;

	var figure_color = Math.floor(Math.random()*7);
	figure_color = n;

	figure_obj = document.createElement("div");
	document.querySelector(".glass_2").appendChild(figure_obj);
	figure_obj.className = "figure";

	for (var i = 0; i < figure_array[n].length; i++) {
		var side_obj = document.createElement("div");
		figure_obj.appendChild(side_obj);
		side_obj.style.height = "100px";
		side_obj.style.width = "100px";
		side_obj.style.position = "absolute";
		side_obj.style.backgroundColor = "rgba(" + color_array[figure_color] + ",0.1)";
		side_obj.style.border = "0.1px solid rgba(" + color_array[figure_color] + ",0.1)";
		side_obj.style.transform = 
		"rotateX(" + figure_array[n][i][0] + ") rotateY(" + figure_array[n][i][1] + ") rotateZ(" + figure_array[n][i][2] + ")" +
		" translateX(" + figure_array[n][i][3] + ") translateY(" + figure_array[n][i][4] + ") translateZ(" + figure_array[n][i][5] +")";
		if (figure_array[n][i][6]) side_obj.style.borderLeftColor = "rgba(255,255,255,0.3)";
		if (figure_array[n][i][7]) side_obj.style.borderRightColor = "rgba(255,255,255,0.3)";
		if (figure_array[n][i][8]) side_obj.style.borderTopColor = "rgba(255,255,255,0.3)";
		if (figure_array[n][i][9]) side_obj.style.borderBottomColor = "rgba(255,255,255,0.3)";
	}
	show_figure()	
}






function show_figure() {
	figure_obj.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)"
						+ " rotateX(" + a + "deg) rotateY(" + b + "deg) rotateZ(" + g + "deg)";
} 



window.onkeydown = function(event) {

		 if (event.keyCode === 37) {if (x != 0 ) {x -= 100}}
	else if (event.keyCode === 38) {if (y != 0 ) {y -= 100}}
	else if (event.keyCode === 39) {if (x != 400 ) {x += 100}}
	else if (event.keyCode === 40) {if (y != 400 ) {y += 100}}
	else if (event.keyCode === 32) {if (z != -300 ) {z -= 100}}
	else if (event.keyCode === 8) {if (z != 300 ) {z += 100}}
	else if (event.keyCode === 87) {a -= 90}
	else if (event.keyCode === 83) {a += 90}
	else if (event.keyCode === 65) {b -= 90}
	else if (event.keyCode === 68) {b += 90}	
	else if (event.keyCode === 81) {g -= 90}
	else if (event.keyCode === 69) {g += 90}
	// else if (event.keyCode === 49) {create_figure(Math.floor(Math.random()*8))}			
	else if (event.keyCode === 49) {create_figure(0)}			
	else if (event.keyCode === 50) {create_figure(1)}	
	else if (event.keyCode === 51) {create_figure(2)}	
	else if (event.keyCode === 52) {create_figure(3)}	
	else if (event.keyCode === 53) {create_figure(4)}	
	else if (event.keyCode === 54) {create_figure(5)}	
	else if (event.keyCode === 55) {create_figure(6)}	
	else if (event.keyCode === 56) {create_figure(7)}

	show_figure();
}


var move_array = 
			  [['b +=  90', 'x += 100', 'x += 100', 'x += 100', 
						   'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100'],

			  ['b +=  90', 'b +=  90', 'x += 100', 
			  			   'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100'],

			  ['x += 100', 'x += 100', 'y -= 100', 'g +=  90', 'g +=  90',
			  			   'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100'],

			  ['x -= 100', 'y -= 100',
			  			   'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100'],

			  ['y += 100',  
			  			   'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100'],

			  ['g +=  90', 'b +=  90', 'b +=  90', 'x += 100', 'y += 100', 'x += 100', 
			  			   'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100'],

			  ['y += 100', 'g -=  90', 'y += 100', 'y += 100', 'x -= 100',
			  			   'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100'],

			  ['x += 100', 'x += 100', 'y += 100', 'y += 100', 'y += 100', 'b +=  90', 'b +=  90', ,
			  			   'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100', 'z -= 100']


]

var time = 0;
for (var j = 0; j < figure_array.length; j++) {
	var TimerId = setTimeout(create_figure, time += 400, j);
	var TimerId = setTimeout(show_figure, time += 400);

	for (var i = 0; i < move_array[j].length; i++) {
		var TimerId = setTimeout(move_array[j][i] + '; show_figure()', (time += 200));
	}
}

// var TimerId = setTimeout(location.reload(), time += 400);;

