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



let x = Math.round(Math.random()*5 +1);
let y = Math.round(Math.random()*5 +1);
let count = 0

while (!(x === y)){
    x = Math.round(Math.random()*5 +1);
    y = Math.round(Math.random()*5 +1);
    count++
}

console.log(count);