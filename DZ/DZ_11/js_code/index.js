// const secondItemElem = document.querySelector('#second-item');
// const secondItemElemClick = () => {
//     secondItemElem.classList.toggle('list-item_done'); //add / remove / toggle
//     // secondItemElem.style.backgroundColor = 'blue';
// }
// secondItemElem.addEventListener('click', secondItemElemClick);

//--------------------------

// Находим форму по её идентификатору
const bmiForm = document.querySelector('#bmi-form');

//---------------------------------------



// Функция калькулятора с формулой
function calculateBMI(height, weight) {
    // Формула BMI: вес/рост * рост
    const heightInMeters = height / 100; // перевоод метров в см.
    return weight / (heightInMeters * heightInMeters);
}

//Недостаточный вес: ИМТ менее 18,5. 
//Нормальный вес: ИМТ от 18,5 до 24,9. 
//Избыточный вес: ИМТ от 25 до 29,9. 
//Ожирение: ИМТ от 30 и выше.
// Функция для result
function displayBMIresult(bmi) {
    let result = '';
    if (bmi < 18.5) {
        result = 'Недовес';
    } else if (bmi >= 18.5 && bmi < 25) {
        result = 'Нормальный';
    } else if (bmi >= 25 && bmi < 30) {
        result = 'Лишний вес';
    } else {
        result = 'Ожирение';
    }
    // Вывод вердикта BMI на странице
    document.getElementById('bmi-result').textContent = 'Ваш вес и состояние: ' + result;
}
