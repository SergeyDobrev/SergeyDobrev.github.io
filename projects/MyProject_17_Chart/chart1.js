function chart1(myArrow, w, h) {
    var myCanvas = document.getElementById('myCanvas1'),
    myContext = myCanvas.getContext('2d'),
    max = 0;
    myCanvas.width = w;
    myCanvas.height = h;

    // находим максимальное значение в массиве данных
    for (var i = 0; i < myArrow.length; i++) {
        if (max < myArrow[i]) max = myArrow[i];
    } 

    var scale = myCanvas.height / max,
    barWidth = Math.floor(myCanvas.width / myArrow.length);

    // создаем отдельный элемент диаграммы
    for (var i = 0; i < myArrow.length; i++) {
       
        var barHeight = myArrow[i] * scale,
            x = barWidth * i,
            y = myCanvas.height - barHeight;

        myContext.fillStyle = 'green';
        myContext.fillRect(x, y, barWidth - 2, barHeight);
        myContext.font = '14px serif';
        myContext.fillStyle = 'white';
        myContext.fillText(myArrow[i], x+ 2, y + 12);
    }
}