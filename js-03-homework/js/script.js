// №1

// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }


// function max(a, b) {
//     return a > b ? a : b;
// }



// №2

// function pow(x, n) {
//     let result = x;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 0) {
//     alert(`Степень ${n} не поддерживается, результат < 0`);
// } else {
//     alert(pow(x, n));
// }


// №3

// function howManyDays(month) {
//     let days = month;
//     switch (days) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log('В этом месяце 31 день');
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log('В этом месяце 30 дней');
//             break;
//         case 2:
//             console.log('В этом месяце 28 дней');
//             break;
//         default:
//             console.log('Неверное значение.');
//     }
//     return days;
// }
// let result = howManyDays(11);





// let a = 0;
// let b = 0;
// // let c = 0;

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     console.log(c)
//     return c
// }
// myFn(2, 4)




// №4

// function checkOute(a, b, even, add) {
//     console.log(`Переменная а:${a}`);
//     console.log(`Переменная b:${b}`);
//     let resultMultipl = a * b;
//     console.log(`Cумма: ${resultMultipl}`);
//     if (resultMultipl % 2 == 0) {
//         even();
//     } else {
//         add();
//     }
// }

// function even() {
//     console.log('Число четное');
// }

// function add() {
//     console.log('Число не четное');
// }
// checkOute(5, 1, even, add);





// №5 
let number = +prompt('Введите число от 1 до 18: ', '');
let checkNumber = number;
if (checkNumber <= 19) {

} else {
    alert('Введено неверное значение');
};

for (let i = 0; i <= checkNumber && checkNumber <= 19; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
};