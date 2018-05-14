function chart4(myArrow, w, h) {
    var myCanvas = document.getElementById('myCanvas4'),
        myContext = myCanvas.getContext('2d'),
        mySumm = 0,
        startAngle = 0,
        endAngle = 0,
        x = w / 2,
        y = h / 2,
        r = h / 2 - 10;
    myCanvas.width = w;
    myCanvas.height = h;

    for (var i = 0; i < myArrow.length; i++) {
        mySumm = mySumm + myArrow[i];
    }

    for (var i = 0; i < myArrow.length; i++) {
       
        var color = 100 + Math.floor((155 / myArrow.length) * i),
            angle = Math.PI * 2 * myArrow[i] / mySumm;
        endAngle = startAngle + angle;

        myContext.fillStyle = 'rgb('+ color  +', '  + color  + ', 0)';
        myContext.beginPath();
        myContext.moveTo(x, y);
        myContext.arc(x, y, r, startAngle, endAngle);
        myContext.closePath();
        myContext.fill();
        startAngle = endAngle;
    }

    for (var i = 0; i < myArrow.length; i++) {
        var angle = Math.PI * 2 * myArrow[i] / mySumm;
        endAngle = startAngle + angle;
        startAngle = endAngle;

        myContext.font = '14px serif';
        myContext.fillStyle = 'black';
        a = 160 + Math.floor(Math.cos(startAngle)*140)
        b = 300 + Math.floor(Math.sin(startAngle)*150);
        myContext.fillText(myArrow[i], b, a);
    }
}