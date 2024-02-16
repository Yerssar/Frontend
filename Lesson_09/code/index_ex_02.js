const arrName = [1, 2, 3, 4, "a", null, NaN, [1, 2]];

// for (let i = 0; i < arrName.length; i++) {
//     console.log(arrName[i]);
// }

let i = 0;
while(i < arrName.length) {
    console.log(arrName[i]);
    i++;
}

const sArray = [1, 2, 3, 4, 5, 6];
const [a, b, c] = sArray;

// const copysArray = sArray;

// sArray[0] = "a";

// console.log(sArray);
// console.log(copysArray);
// const sArray = [1, 2, 3];

const copysArray = [...sArray];

// sArray[0] = "a";

// console.log(sArray);
// console.log(copysArray);
// console.log(...sArray);
console.log(a);
console.log(b);
console.log(c);