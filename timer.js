// Берём элемент для вывода таймера
let timer_show1 = document.getElementById("timer1");
let timer_show2 = document.getElementById("timer2");
let timer_show3 = document.getElementById("timer3");
let heart_button1 = document.getElementById("Heart_button1");
let heart_button2 = document.getElementById("Heart_button2");
let heart_button3 = document.getElementById("Heart_button3");

// Функция для вычисления разности времени
function diffSubtract(date1, date2) {
    return date2 - date1;
}

// Массив данных о времени
let end_date1 = {
    "full_year": "2023", // Год
    "month": "02", // Номер месяца
    "day": "14", // День
    "hours": "01", // Час
    "minutes": "15", // Минуты
    "seconds": "00" // Секунды
}
let end_date2 = {
    "full_year": "2023", // Год
    "month": "02", // Номер месяца
    "day": "14", // День
    "hours": "01", // Час
    "minutes": "20", // Минуты
    "seconds": "00" // Секунды
}
let end_date3 = {
    "full_year": "2023", // Год
    "month": "02", // Номер месяца
    "day": "14", // День
    "hours": "01", // Час
    "minutes": "25", // Минуты
    "seconds": "00" // Секунды
}

// Строка для вывода времени
let end_date_str1 = `${end_date1.full_year}-${end_date1.month}-${end_date1.day}T${end_date1.hours}:${end_date1.minutes}:${end_date1.seconds}`;
let end_date_str2 = `${end_date2.full_year}-${end_date2.month}-${end_date2.day}T${end_date2.hours}:${end_date2.minutes}:${end_date2.seconds}`;
let end_date_str3 = `${end_date3.full_year}-${end_date3.month}-${end_date3.day}T${end_date3.hours}:${end_date3.minutes}:${end_date3.seconds}`;

// Запуск интервала таймера
timer1 = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    // Получение заданного времени
    let date1 = new Date(end_date_str1);
    // Вычисление разницы времени
    let ms_left1 = diffSubtract(now, date1);
    // Если разница времени меньше или равна нулю
    if (ms_left1 <= 0) { // То
        // Выключаем интервал
        clearInterval(timer1);
        heart_button1.disabled = false;
        timer_show1.innerHTML = "";
    } else { // Иначе
        // Получаем время зависимую от разницы
        let res1 = new Date(ms_left1);
        // Делаем строку для вывода
        let str_timer1 = `${res1.getUTCHours()}:${res1.getUTCMinutes()}:${res1.getUTCSeconds()}`;
        // Выводим время
        timer_show1.innerHTML = str_timer1;
    }
}, 1000)

timer2 = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    // Получение заданного времени
    let date2 = new Date(end_date_str2);
    // Вычисление разницы времени
    let ms_left2 = diffSubtract(now, date2);
    // Если разница времени меньше или равна нулю
    if (ms_left2 <= 0) { // То
        // Выключаем интервал
        clearInterval(timer2);
        heart_button2.disabled = false;
        timer_show2.innerHTML = "";
    } else { // Иначе
        // Получаем время зависимую от разницы
        let res2 = new Date(ms_left2);
        // Делаем строку для вывода
        let str_timer2 = `${res2.getUTCHours()}:${res2.getUTCMinutes()}:${res2.getUTCSeconds()}`;
        // Выводим время
        timer_show2.innerHTML = str_timer2;
    }
}, 1000)

timer3 = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    // Получение заданного времени
    let date3 = new Date(end_date_str3);
    // Вычисление разницы времени
    let ms_left3 = diffSubtract(now, date3);
    // Если разница времени меньше или равна нулю
    if (ms_left3 <= 0) { // То
        // Выключаем интервал
        clearInterval(timer3);
        heart_button3.disabled = false;
        timer_show3.innerHTML = "";
    } else { // Иначе
        // Получаем время зависимую от разницы
        let res3 = new Date(ms_left3);
        // Делаем строку для вывода
        let str_timer3 = `${res3.getUTCHours()}:${res3.getUTCMinutes()}:${res3.getUTCSeconds()}`;
        // Выводим время
        timer_show3.innerHTML = str_timer3;
    }
}, 1000)


let hearts = document.getElementById("heart");
for (i=0;i<=3;i++) {
    console.log(hearts[i])
}
