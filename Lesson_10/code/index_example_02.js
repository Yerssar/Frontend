// const sum = (a,b)=> a+b;
// const sumResult = sum();
// console.log(sumResult);

const multiply = (a,b)=>a*b;
const pow = (a)=> a**a;

const universal = (a,b,f) => {
    return f(a,b);
}
//callback function 
console.log(universal(3,2,pow));
console.log(universal(3,2,multiply));

//