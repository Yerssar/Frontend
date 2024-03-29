// Задание 1. Even/Odd
// Создайте ф-цию, которая определяет парность числа
// Функция должна принимать целое число
// Если число не целое - скруглить его в меньшую сторону
// Функция должна вернуть строку 'even' если число четное
// Функция должна вернуть строку 'odd' если число не четное
console.log('Задание 1. Even/Odd');
function checkEvenOdd(number) {
    // Math.round(): Округляет число до ближайшего целого.
    // Math.ceil(): Округляет число вверх до ближайшего целого.
    // toFixed(): Округляет число до указанного количества десятичных знаков и возвращает строку.
    // integerNumber = number | 0: Преобразуем число в целое, отбрасывая десятичную часть
    let roundedDown = Math.floor(number); // Math.floor(): Округляет число вниз до ближайшего целого.
    if (roundedDown % 2 === 0) {
        return `Число ${number} четное`; // Шаблонная строка: в косых ковычках и выражение ${}
    } else {
        return `Число ${number} нечетное`;
    }
}
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(18));
console.log(checkEvenOdd(3.7)); 

console.log('-------------------------------------------------');

// Задание 2. Стрелочная ф-ция возводящая число в квадрат
// Создайте ф-цию, которая возвращает квадрат числа
// Функция должна принимать целое число
// Если число не целое - скруглить его в меньшую сторону
// Функция должна вернуть квадрат этого числа
console.log('// Задание 2. Стрелочная ф-ция возводящая число в квадрат');
const squareNumber = (number) => { // стрелочная ф-я - ( result = (num сделай => условие
    if (Number.isInteger(number)) {// ф-я Проверки является ли число целым аналог - function isInteger(num) {return num % 1 === 0;}
        return number * number;
    } else {
        const roundedNumber = Math.floor(number);
        return roundedNumber * roundedNumber;
    }
};
console.log(squareNumber(3)); 
console.log(squareNumber(3.5)); 

console.log('----------------------------------');


// Задание 3. Сумма четных чисел в заданном промежутке
// Создайте ф-цию, которая ищет сумму всех четных чисел в заданном промежутке
// Аргументы функции два - начало промежутка и конец промежутка
// Если число не целое - скруглить его в меньшую сторону
// На заданном промежутке ф-ция должна найти и сложить все четные числа и вернуть сумму
console.log('Задание 3. Сумма четных чисел в заданном промежутке');
function sumEvenNumbersInRange(start, end) {
    start = Math.floor(start); // округляем начало промежутка в меньшую сторону
    end = Math.floor(end);     // округляем конец промежутка в меньшую сторону
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) { // Проверяем, является ли число четным
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenNumbersInRange(1, 10)); // Ответ должен быть 30, так как 2 + 4 + 6 + 8 + 10 = 30
console.log('----------------------------------');

// Задание 4. Простые числа в заданном промежутке
// Нужно создать две функции.
// Первая функция должна принимать число и возвращать результат булевого типа - 
// является ли число простым, или нет. Число является простым, 
// если оно делиться без остатка только на 1 и само на себя.
// Вторая функция должна вернуть в виде массива все простые числа в промежутке от 1 до n, где n - 
// первый аргумент функции.
// Вторая функция должна пользоваться первой функцией для определения простых чисел.
// Первая функция не должна быть колбеком, просто рядом лежать, или даже внутри второй функции. На ваш выбор.
console.log('Задание 4. Простые числа в заданном промежутке');
// Функция для определения, является ли число простым
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Функция для получения всех простых чисел в заданном промежутке
function getPrimesInRange(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
const n = 17;
console.log(`Простые числа в промежутке от 1 до ${n}:`, getPrimesInRange(n));
