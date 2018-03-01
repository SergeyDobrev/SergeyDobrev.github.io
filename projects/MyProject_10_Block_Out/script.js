var x = 0;
var y = 0;
var z = 0;
var oldx = 0;
var oldy = 0;
var oldz = 300;
var a = 0;
var b = 0;
var g = 0;
var olda = 0;
var oldb = 0;
var oldg = 0;
var figure_obj;
var old_figure_obj = undefined;
var color_array = ["255,0,0","0,255,0","0,0,255","255,255,0","255,0,255","0,255,255","255,255,255"];
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
	oldx = 100;
	oldy = 100;
	oldz = 300;
	olda = 0;
	oldb = 0;
	oldg = 0;
	var figure_color = Math.floor(Math.random()*7);
	var glass_2_obj = document.querySelector(".glass_2");

/*	if (old_figure_obj != undefined) {
		glass_2_obj.removeChild(old_figure_obj);
	}*/

	figure_obj = document.createElement("div");
	old_figure_obj = figure_obj;
	glass_2_obj.appendChild(figure_obj);
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
			if (figure_array[n][i][6]) {side_obj.style.borderLeftColor = "white"};
			if (figure_array[n][i][7]) {side_obj.style.borderRightColor = "white"};
			if (figure_array[n][i][8]) {side_obj.style.borderTopColor = "white"};
			if (figure_array[n][i][9]) {side_obj.style.borderBottomColor = "white"};
		}
	}






function show_figure() {
	figure_obj.style.transform = "translateX(" + oldx + "px) translateY(" + oldy + "px) translateZ(" + oldz + "px)"
						+ " rotateX(" + olda + "deg) rotateY(" + oldb + "deg) rotateZ(" + oldg + "deg)";
} 
var flag = true;
window.onkeydown = function(event) {

		 if (event.keyCode === 37) {if (oldx != 0 ) {oldx -= 100}}
	else if (event.keyCode === 38) {if (oldy != 0 ) {oldy -= 100}}
	else if (event.keyCode === 39) {if (oldx != 400 ) {oldx += 100}}
	else if (event.keyCode === 40) {if (oldy != 400 ) {oldy += 100}}
	else if (event.keyCode === 32) {if (oldz != -300 ) {oldz -= 100}}
	else if (event.keyCode === 8) {if (oldz != 300 ) {oldz += 100}}
	else if (event.keyCode === 87) {olda -= 90}
	else if (event.keyCode === 83) {olda += 90}
	else if (event.keyCode === 65) {oldb -= 90}
	else if (event.keyCode === 68) {oldb += 90}	
	else if (event.keyCode === 81) {oldg -= 90}
	else if (event.keyCode === 69) {oldg += 90}
	else if (event.keyCode === 49) {create_figure(Math.floor(Math.random()*7))}			
/*	else if (event.keyCode === 50) {create_figure(1)}	
	else if (event.keyCode === 51) {create_figure(2)}	
	else if (event.keyCode === 52) {create_figure(3)}	
	else if (event.keyCode === 53) {create_figure(4)}	
	else if (event.keyCode === 54) {create_figure(5)}	
	else if (event.keyCode === 55) {create_figure(6)}	
	else if (event.keyCode === 56) {create_figure(7)}*/


	show_figure();
/*	console.log(event.keyCode,flag,oldx,oldy,oldz);*/
}
