function chart3(myArrow, w, h) {
    var myCanvas = document.getElementById('myCanvas3'),
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

    // создаем отдельный элемент точку
    for (var i = 0; i < myArrow.length; i++) {
       
        var barHeight = myArrow[i] * scale,
            x = 5 + barWidth * i,
            y = myCanvas.height - barHeight;

        myContext.beginPath()
        myContext.arc(x, y, 5, 0, Math.PI*2);
        myContext.fillStyle = 'red';
        myContext.fill();

        myContext.font = '14px serif';
        myContext.fillStyle = 'black';
        myContext.fillText(myArrow[i], x + 2, y - 12);
    }
}