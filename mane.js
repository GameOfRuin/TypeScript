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

// const h = 5;
// let spaceCount = 0;
// let starCount = 1;
// const space = ' '
// const star = '*'
//
//
// for (let i = 0; i < h; i++) {
//
//     spaceCount = h - i;
//
//     console.log(`${space.repeat(spaceCount)}${star.repeat(starCount)}`);
//
//     starCount += 2;
// }

// const matrix = [
//     ['Id', 'Title', 'Description'],
//     [1, 'Title-1', 'Description-1'],
//     [2, 'Title-2', 'Description-2'],
//     [3, 'Title-3', 'Description-3', 'Поле с багом'],
//     [4, 'Title-4', 'Description-4'],
//     [5, 'Title-5', 'Description-5'],
//     [6, 'Title-6', 'Description-6', 'Поле с багом'],
// ];


// for (let i = 0; i < matrix.length; i++) {
//
//     let line = '';
//     line += matrix[i][0].toString() + '\t'
//
//     for (let j = 1; j < matrix[i].length; j++) {
//
//         if (j === 3) {
//             line += '\t'
//         }
//         line += matrix[i][j].toString() + ' '
//     }
//     console.log(line);
// }


// const numbers = [5, 10, 2, 8, -9007199254740991, 55, 67];
// let max = numbers[0];
// let min = numbers[0];
// let avg = 0;
//
// for (const number of numbers) {
//
//     avg += number;
//
//     if (number > max){
//         max = number;
//     }
//     if (number < min){
//         min = number;
//     }
// }
//
// console.log(`min: ${min}`);
// console.log(`max: ${max}`);
// console.log(`avg: ${max / numbers.length}`);

// const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
// let word = 'Перпендикулярно'
// let count = 0;
// const resolte = {};
//
// for (const wordElement of word) {
//     if (vowels.includes(wordElement.toLowerCase())){
//         resolte['Гласные']++;
//     } else resolte['Согласные']++;
// }
//
// for (const resolteKey in resolte) {
//     console.log(resolteKey, resolte[resolteKey]);
// }

// const people = [
//     { id: 8, name: 'Александр', gender: 'm', age: 25 },
//     { id: 12, name: 'Мария', gender: 'f', age: 22 },
//     { id: 31, name: 'Иван', gender: 'm', age: 17 },
//     { id: 34, name: 'Ольга', gender: 'f', age: 19 },
//     { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
//     { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
//     { id: 3, name: 'Сергей', gender: 'm', age: 18 },
//     { id: 20, name: 'Анна', gender: 'f', age: 20 },
//     { id: 19, name: 'Андрей', gender: 'm', age: 15 },
//     { id: 30, name: 'Наталья', gender: 'f', age: 25 },
// ];
//
// const result = {
//     mans: [],
//     women: [],
// };
//
// for (const person of people) {
//     if (person.gender === 'm' && person.age > 18){
//         result.mans.push(person.name);
//     }
//     if (person.gender === 'f' && person.age > 20){
//         result.women.push(person.name);
//     }
// }
//
// console.log(result);
// /* Должно вывестись:
// {
//   mans: [ 'Александр', 'Дмитрий' ],
//   women: [ 'Мария', 'Екатерина', 'Наталья' ]
// }
//  */


const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 30 },
    { name: 'Frank', age: 28 },
    { name: 'Grace', age: 25 },
    { name: 'Hannah', age: 41 },
    { name: 'Ivy', age: 30 },
    { name: 'Jack', age: 28 },
];

const counter = {};


for (const user of users) {
    if (!(user.age in counter)){
        counter[user.age] = 0;
    }

    counter[user.age] += 1;
}
for (const counterKey in counter) {
    console.log(`Возраст = ${counterKey}. Количество людей = ${counter[counterKey]}`);
}