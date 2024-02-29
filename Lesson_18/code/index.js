// Написать функцию, которая принимает масив из чисел, и возвращает новые масив, 
// такого же размера, четные числа остаются неизменными, а нечетные умножаются на 2
// Например, на вход [2, 3,  4, 5]
// На выходе должна вернуть [2, 6, 4, 10]


function newArray(array){
    const newArray = array.map(function(num){
        return num%2 === 0?num:num*2;
    })
    return newArray;
}

const firstArray = [2, 3, 4, 5];
const secondArray = newArray(firstArray);

console.log(secondArray); 

