// создаём массив с данными и запускаем отрисовку графиков в canvas
function randomFun() {
    var arrayLenth = undefined, // длина массива данных для графика
        myArrow = [],           // массива данных для графика
        max = 0,                // максимальное значение в массиве
        w = 600,                // ширина "холста" графика
        h = 300;                // высота "холста" графика


    if (myArrow.length != 0) myArrow = [];

    // задаём длину массива от 5 до 20
    arrayLenth = 5 + Math.floor(Math.random() * 15);

    // наполняем массив случайными числами от 50 до 200
    for (var i = 0; i < arrayLenth; i++) {                      
        myArrow[i] = 50 + Math.floor(Math.random() * 150);
    }

    // находим максимальное значение в массиве данных
    for (var i = 0; i < myArrow.length; i++) {
        if (max < myArrow[i]) max = myArrow[i];
    } 

    // отображаем данные масива
    $('div').text(myArrow.join(', ')); 
    // отображаем графики
    chart1(myArrow, w, h);
    chart2(myArrow, w, h);
    chart3(myArrow, w, h);
    chart4(myArrow, w, h);
}