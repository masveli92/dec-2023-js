// // ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let squareRectangle = (a, b) => a * b;
//
// console.log(squareRectangle(4, 4));
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let squareCircle = (r) => Math.PI * r ** 2;
//
// console.log(squareCircle(5));
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let squareCylinder = (R, h) => (2 * Math.PI * R ** 2) + (Math.PI * R * h);
//
// console.log(squareCylinder(4, 6));
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let printer = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// printer([1, 2, 3])
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let paragraphCreator = (text) => document.write(`<p>${text}</p>`);
//
// paragraphCreator('Hello')
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let listCreator = (li1, li2, li3) => document.write(`<ul>
//     <li>${li1}</li>
//     <li>${li2}</li>
//     <li>${li3}</li>
//   </ul>`);
//
// listCreator('one', 'two', 'three');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let listBuilder = (text, count) => {
//     document.write(`<ul>`)
//     for (i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// };
//
// listBuilder('some text', 2)
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let listOfItem = (array) => {
//     document.write(`<ul>`)
//     for (i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listOfItem([12, 'text', true, 14, 2])
//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
// // об'єкту окремий блок.
//
// let writer = (array) => {
//     for (const item of array) {
//         document.write(`<div>${item.id} - ${item.name} -${item.age}</div>`)
//     }
// }
// writer([{id: 1, name: 'Anna', age: 21}, {id: 2, name: 'Victoria', age: 19}, {id: 3, name: 'Andriy', age: 23}]);
//
// // - створити функцію яка повертає найменьше число з масиву
//
// let min = (array) => {
//     let n = array[0];
//     for (const item of array) {
//         if (item < n) {
//             n = item
//         }
//     }
//     return n
// }
// console.log(min([2, 13, 2, 1, 0, -4, -2, 11, 3]))
//
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// // Приклад sum([1,2,10]) //->13
//
// let sum = (array) => {
//     let n = 0;
//     for (const item of array) {
//         n += item;
//     }
//     return n
// }
// console.log(sum([2, 13, 2, 1, 0, -4, -2, 11, 3]))
//
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// let swap = (arr,index1,index2) => {
//     const num = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2]=num;
//    return arr;
// }
// console.log(swap([11,22,33,44],0,1))
//
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
//     for (const currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency){
//             return sumUAH/currencyValue.value
//         }
//     }
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
//
// // створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено)
//
// let func =(...n)=>{
//     let min = n[0];
//     let max = n[0];
//     for (const nElement of n) {
//         if (min > nElement) min=nElement;
//         if (max<nElement) max = nElement;
//     }
//     console.log(min)
//     return max
// }
// console.log(func(23,14,21,0,-2, 17, 28))