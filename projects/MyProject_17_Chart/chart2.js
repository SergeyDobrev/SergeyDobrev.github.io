function chart2(myArrow, w, h) {
    var myCanvas = document.getElementById('myCanvas2'),
    myContext = myCanvas.getContext('2d'),
    max = 0;
    myCanvas.width = w;
    myCanvas.height = h;

    // находим максимальное значение в массиве данных
    for (var i = 0; i < myArrow.length; i++) {
        if (max < myArrow[i]) max = myArrow[i];
    } 

    var scale = Math.floor(myCanvas.height / max),
    barWidth = Math.floor(myCanvas.width / myArrow.length);

    myContext.beginPath()
    myContext.lineWidth = 4; 
    myContext.strokeStyle = 'blue';
    myContext.moveTo(0,myCanvas.height - myArrow[0] * scale);

    // создаем отдельный элемент графика
    for (var i = 0; i < myArrow.length; i++) {
       
        var barHeight = myArrow[i] * scale,
            x = barWidth * i,
            y = myCanvas.height - barHeight;

        myContext.lineTo(x,y);
        myContext.font = '14px serif';
        myContext.fillStyle = 'black';
        var m = 1;
        if (i != myArrow.length - 1) {
            if (myArrow[i + 1] > myArrow[i]) m = - 1;
        }
        myContext.fillText(myArrow[i], x + 4, y - 12 * m);
    }
    myContext.stroke();  
}