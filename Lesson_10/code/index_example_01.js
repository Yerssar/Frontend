const sum = function(a, b) {
    return a + b;
}

// console.log(sum(1, 5));
// console.log(sumA(1, 5));

// hoisting (для declaration)
function sumA(a, b) {
    return (a + b);
}


////////////////////////////////////////


// const sumAr = (a, b) => {
//     console.log("Hi");
//     return a + b;
// }

// const summa = sumAr(5, 3);
// console.log(summa);





// const sumAr = (a, b) => a + b;

// const summa = sumAr(5, 3);
// console.log(summa);




// const pow = a => a**a;

// const powRes = pow(3);
// console.log(powRes);



const print = () => 'Hello'; // тоже самое, что const print = () => { return 'Hello' };

const printRes = print();
console.log(printRes);