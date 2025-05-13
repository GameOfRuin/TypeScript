// const array = [1, 33, -10, 'example', 'word'];
//
// console.log(array.join('_'));

// const user = {
//     name: 'Alex',
//     nickname: 'Alexxx675',
//     nicknameHistory: ['AlexLuk', 'Xela-123', 'Sasha 8'],
// };
//
//
// user.nicknameHistory.push(user.nickname);
// user.nickname = 'AlexYx';



// let x = Math.round(Math.random()*5 +1);
// let y = Math.round(Math.random()*5 +1);
// let count = 0
//
// while (!(x === y)){
//     x = Math.round(Math.random()*5 +1);
//     y = Math.round(Math.random()*5 +1);
//     count++
// }
//
// console.log(count);


// const numberArray =  [1.1 , 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3, 4, 6];
// const values = {'Положительно': 0, 'Отрицательно': 0};
// // counter = 0;
//
// for (let i = 0; i < numberArray.length; i++) {
//
//     if (numberArray[i] === numberArray[numberArray.length-2]){
//         continue
//     }
//
//     if (numberArray[i] > 0){
//         values['Положительно']++;
//     } else {values['Отрицательно']++;}
// }
//
// console.log(values);

const h = 5;
let spaceCount = 0;
let starCount = 1;
const space = ' '
const star = '*'


for (let i = 0; i < h; i++) {

    spaceCount = h - i;

    console.log(`${space.repeat(spaceCount)}${star.repeat(starCount)}`);

    starCount += 2;
}


