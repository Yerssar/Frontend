const sentence = "Сегодня, мы изучаем, loops";


// console.log(sentence.length);
// console.log(sentence[1]);
// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());

// console.log(sentence.split(' '));

// console.log(sentence.substring(0, 7));

const tempVar = sentence.replaceAll(',', '');
// console.log(tempVar);
// console.log(...tempVar);

// for(let i = 0; i < sentence.length; i++) {
//     console.log(sentence[i]);
//     if(sentence[i] === ',') {
//         sentence[i] = '';
//     }
// }

console.log(tempVar.split(' '))