// default arguments
const sum = (a, b = 2) => a + b;

// const sumResult = sum(5);
// console.log(sumResult);


///////

const multiply = (a, b) => a * b;
const pow = (a, b) => a ** b;



const universal = (a, b, f) => {
    const result = f(a, b);
    return result;
}

// callback
// const callBackResult = universal(3, 2, pow);

//
const callBackResult = universal(3, 2, (a, b) => a/b);


console.log(callBackResult)

//////////////////////////////////////////////////////////////////////////////////////////

// Написать функцию "hello" которая принимает строку, и колбек функцию.
// И колбек функция должна выполниться с первым аргументом (строкой), и результат ее выполнения должен вернуться из функции "hello" 


const hello = (str, f) => {
    return f(str);
}

// Теперь вызвем функцию hello, и передадим ей свое имя, и стрелочную функцию, которая принимает строку-аргумент,
// и возвращает строку "Привет *строка аргумент*"

// const str2 = hello("Мишель", str => "Привет " + str);



// console.log(str2);

const str2 = hello("Мишель", (str) => {
    // return "Привет " + str
    return `Привет ${str}`
});



/////
const a = "слово-1"
const b = "слово-b"
const c = "слово-c"
const d = "слово-d"


console.log("это у нас " + a + ", а это " + b + ", а это " + c);
console.log(`это у нас ${a}, а это ${b}, а это ${c}`);