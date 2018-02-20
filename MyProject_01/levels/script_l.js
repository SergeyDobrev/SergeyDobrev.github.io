var blockobj = new Array;
var rcarray = new Array;
var oldblockobj = null;
var counter = 0;

for (var j = 0; j < 20; j++) {
	blockobj[j] = document.createElement("div");
	document.body.appendChild(blockobj[j]);
	blockobj[j].className = "block";
	rcarray[j] = 0;
}

var IntervalId = setInterval(createBlockFun,400);

function createBlockFun() {
	var rbobj = document.createElement("div");
	var m = Math.floor(Math.random() * 20);
	rcarray[m]++;

	blockobj[m].appendChild(rbobj);
	rbobj.className = "rotateblock";
	counter++;
	console.log(counter);
	

	var myarray = ["front", "back", "left", "right", "top", "bottom"];
	var sideobj = new Array;
	for (var i = 0; i < myarray.length; i++) {
		sideobj[i] = document.createElement("div");
		rbobj.appendChild(sideobj[i]);
		sideobj[i].className = "side " + myarray[i];
//		sideobj[i].style.backfaceVisibility = "hidden";
	}
    
    $(sideobj).animate({width: "5px", height: "5px"}, 3000, "linear");

	rbobj.style.transform = "rotateX(" + Math.floor(Math.random() * 360) + "deg)" +
							"rotateY(" + Math.floor(Math.random() * 360) + "deg)" +
							"rotateZ(" + Math.floor(Math.random() * 360) + "deg)";
	rbobj.style.transition = "transform 10s";

    $(rbobj).animate({top: (window.innerHeight - 100)}, 3000, "linear");

    if (rcarray[m] > 3) {
    	blockobj[m].removeChild(blockobj[m].firstChild);
    	counter--;
 	console.log(counter);   	
    }

    if (rcarray[m] % 10 === m) {
		blockobj[m].style.zIndex = "1";
		if (oldblockobj != null) {
			oldblockobj.style.zIndex = "-1";
		}
		oldblockobj = blockobj[m]
	}
}
