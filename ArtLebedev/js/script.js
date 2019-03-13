function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColor() {
    //Генерируем случайные числа для RGB
    var firstColor = getRandomInt(0,255);
    var secondColor = getRandomInt(0,255);
    var thirdColor = getRandomInt(0,255);
    //Делаем строку для вставки
    var colorToStyle = 'rgb(' + firstColor + ',' + secondColor + ',' + thirdColor +' )';
    //Разукрашиваем
    var header = document.getElementsByTagName('header');
    headerContent.style.background = colorToStyle;
    header[0].style.background = colorToStyle;
}
