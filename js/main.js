
// 1. Задать температуру в градусах по Цельсию. 
// Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
function calculateTemperature() {
    let celsius = document.getElementById('celsius').value; //Беру значение из инпута
    if (celsius > 0) { //Проверяю на ноль
        let tf = (9 / 5) * celsius + 32 // Считаю формулу
        alert(tf) //Показываю алерт
        return; //Завершаю функцию
    }
    alert('celsius is empty') //Показываю алерт в случае если celsius == 0
}

// 2. Работа с переменными.
// 3. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
function variables() {
    let admin;
    let name;
    name = "Василий"
    admin = name;
    console.log(admin);
}


// 4. *Чему будет равно JS-выражение 1000 + "108"/
function calculateExpression() {
    let result = 1000 + "108"
    console.log(result); //1000108
}


// 5. *Самостоятельно разобраться с атрибутами тега script (async и defer)
// defer - подгрузка скриптов в фоновом режиме
// async - Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.