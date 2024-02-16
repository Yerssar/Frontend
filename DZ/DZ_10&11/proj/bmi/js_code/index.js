//TODO 
// 1. Доделать форму до рабочего состояния, кто не успел.
// 2. Сделать проверку не вводит ли пользователь буквы вместо цифр, 
//    и если только он попробуем ввести не цифру, выводить ему alert.
// 3. При клике на кнопку расчета сделать проверку на пустые поля,
//    если какое то поле или оба пустые, выводить alert.

//----------------------------------------------------------

// создаем const и ищем форму по ID (id ищем через решетку)
const bmiForm = document.querySelector('#bmi-form');

// у bmiForm вызываем ф-ю , слушатель события, которая принимает в себя type кнопки и ф-ю с( event - это само событие)
bmiForm.addEventListener('submit', function(event){ // дальше идет само тело всей этой функции
    event.preventDefault(); // это event что то предотвращает (неполадку с браузером)
    // находим вводные данные с помощью querySelector, обращаемся к Id и присваиваем их
    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');

    // теперь присваиваем к const полученные вводные данные (с помощью .value ) parseInt - преобразует полученные данные в числа
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    // присваеваем созданную внизу  ф-ю вычисления с полученными данными к bmi
    const bmi = calcBMI(height, weight);

    // длля отображения на странице результата вычислени, находим через id bmi-value и присв. ее к новой const
    const bmiRes = document.querySelector('#bmi-res');
    // вызываем функцию у bmiRes чтобы получить текст bmi
    bmiRes.textContent = bmi;
    // вызываем ф-ю с вложенными bmi (созданную внизу с условиями)
    displayBMIRes(bmi);
});

function calcBMI(height, weight) {
    // BMI формула: вес/рост(м)*рост(м)
    const heightInMeters = height / 100; // переводим из м в см
    return weight / (heightInMeters * heightInMeters);
}

function displayBMIRes(bmi) {
    let res = '';
    if (bmi < 18.5) {
        res = 'Недовес';
    } else if (bmi >= 18.5 && bmi < 25) {
        res = 'Нормальный вес';
    } else if (bmi >= 25 && bmi < 30) {
        res = 'Перевес';
    } else {
        res = 'Ожирение';
    }
    //находим bmi-condition и вызываем textContent для отображения на странице
    document.getElementById('bmi-condition').textContent = 'Состояние: ' + res;
}
