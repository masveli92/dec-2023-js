// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function squareRectangle (a,b) {
//   return a*b
// }
// console.log(squareRectangle(2, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function squareCircle (r) {
//     const PI = 3.14;
//     return PI*(Math.pow(r,2))
// }
// console.log(squareCircle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCylinder(r, h) {
//     const PI = 3.14;
//     return 2 * PI * (Math.pow(r, 2)) + 2 * PI * r * h
// }
// console.log(squareCylinder(2, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function printer(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// printer(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function creatorParagraph(text) {
//    document.write(` <p>${text}</p> `)
// }
// creatorParagraph('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function creatorList(li1, li2, li3) {
//     document.write(` <ul>
//  <li>${li1}</li>
//  <li>${li2}</li>
//  <li>${li3}</li>
// </ul> `)
// }
// creatorList('first field', 'second field', 'third field')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

// function listBuilder(text, quantity) {
//     document.write(`<ul>`)
//     for (i=0; i<quantity; i++){
//     document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// listBuilder('text', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// function listBuilder(array) {
//     document.write(`<ul>`)
//     for (i=0; i<array.length; i++){
//     document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// listBuilder(listOfItems)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function writer(array) {
//     for (const item of array) {
//        document.write(`<div>${item.name} - ${item.age} - ${item.status} </div>`)
//     }
// }
//
// writer(users)

// - створити функцію яка повертає найменьше число з масиву

// arr= [14, 21, 15, 10, 0, -2, -5, 4];
//
// function minimum (array) {
//    let n=0;
//     for (const item of array) {
//       if (item<n) {n=item}
//     }
//     console.log(n);
// }
//
// minimum(arr);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// arr= [14, 21, 15, 10, 0, -2, -5, 4];
//
// function sum (array) {
//    let n=0;
//     for (const item of array) {
//       n+=item;
//     }
//     console.log(n);
// }
//
// sum(arr);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// array= [14, 21, 15, 10, 0, -2, -5, 4];
//
// function swap (arr, index1, index2) {
//    let arr2 = [];
//     for (i=0; i<arr.length; i++) {
//       if(i!==index1 && i!==index2) {
//           arr2[i]=arr[i]
//       } else if (i===index1){
//           arr2[index2]=arr[i]
//       } else if (i===index2){
//           arr2[index1] = arr[i]
//       }
//     }
//     console.log(arr2);
// }
//
// swap(array,0,7)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH, currencyValues, exchangeCurrency){
//     let result=0;
//     for (const currencyValue of currencyValues) {
//         if (currencyValue.currency===exchangeCurrency) {
//            result =  sumUAH/currencyValue.value
//         }
//     }
//     return result
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
