// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
// let arr =[1, 'two', 3, 'four', true, "six", 7, 'eight', false, 10];
// console.log(arr[0]);
// console.log(arr[1], arr[2]);
// console.log(arr[3]);
// console.log(arr[4], arr[5], arr[6], arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(arr);
//
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// let book1 = {
//     title: "first book" ,
//     pageCount: 180,
//     genre: 'fantasy'
// }
//
// let book2 = {
//     title: "second book" ,
//     pageCount: 156,
//     genre: 'detective'
// }
//
// let book3 = {
//     title: "third book" ,
//     pageCount: 930,
//     genre: 'science'
// }
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// // масивом. Кожен автор має поля name та age.
//
// let book4 = {
//     title: "fourth book" ,
//     pageCount: 930,
//     genre: 'science',
//     authors: [
//             {name: "yugebv kbsdf", age: 56 },
//             {name: "lkjj jkcf", age: 42}
//     ]}
//
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// // пароль кожного користувача
//
// arr1=[
//     user1={ name: 'trdcf', username: 'trdftgtrsx', password: '1khbkn'},
//     user2={ name: 'trdcf', username: 'trdftgtrsx', password: '2khbkn'},
//     user3={ name: 'trdcf', username: 'trdftgtrsx', password: '3khbkn'},
//     user4={ name: 'trdcf', username: 'trdftgtrsx', password: '4khbkn'},
//     user5={ name: 'trdcf', username: 'trdftgtrsx', password: '5khbkn'},
// ]
// console.log(arr1[0].password);
// console.log(arr1[1].password);
// console.log(arr1[2].password);
// console.log(arr1[3].password);
// console.log(arr1[4].password);

// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 0;
//  if (x) {
//      console.log("virno")}
//  else {
//          console.log('nevirno');
//      }
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
//
// let time = 45;
//
//  if (time >=0 && time<=15) {
//      console.log('persha chvert');
//  } else {
//      if ( time >15 && time<=30) {
//          console.log('druga chvert');
//      } else {
//          if ( time >30 && time<=45) {
//              console.log('tretia chvert');
//          } else {
//              if ( time >45 && time<=59) {
//                  console.log('chetverta chvert');
//              } else {
//                  console.log('ne virno vvedenui chas')
//              }
//          }
//      }
//  }
//
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// // (у першу, другу чи третю).
//
// let day = 10;
//
// if (day >=1 && day <=10) {
//     console.log('persha decada');
// } else {
//     if ( time >10 && time<=20) {
//         console.log('druga decada');
//     } else {
//         if ( time >20 && time<=31) {
//             console.log('tretia decada');
//         } else {
//              console.log('ne virno vkazana data')
//             }
//     }
// }
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// // інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let num = 4;
// switch (num) {
//     case 1:
//         console.log ('monday');
//         break;
//     case 2:
//         console.log ('tuesday');
//         break;
//     case 3:
//         console.log ('wednesday');
//         break;
//     case 4:
//         console.log ('thursday');
//         break;
//     case 5:
//         console.log ('friday');
//         break;
//     case 6:
//         console.log ('saturday');
//         break;
//     case 7:
//         console.log ('sunday');
//         break;
//     default:
//         console.log ('такого значення не існує');
// }
//
//
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
//
// let a= 6;
// let b = 7;
//
//  if (a>b) {
//      console.log(a);
//  } else {
//      if (a===b) {
//          console.log("tsi chysla rivni");
//      } else {
//          console.log(b);}
//  }
//
// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
// //         falsy (хибноподібні, тобто приводиться до false)
// let n = 0;
// let y = n || "default";
//
// console.log(y);
//
// //     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// //     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration>5) {
//      console.log('super');}
// if (coursesAndDurationArray[1].monthDuration>5) {
//     console.log('super');}
// if (coursesAndDurationArray[2].monthDuration>5) {
//     console.log('super');}
// if (coursesAndDurationArray[3].monthDuration>5) {
//     console.log('super');}
// if (coursesAndDurationArray[4].monthDuration>5) {
//     console.log('super');}
// if (coursesAndDurationArray[5].monthDuration>5) {
//     console.log('super');}
//
// // for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
// //     if (coursesAndDurationArrayElement.monthDuration>5) {
// //      console.log('super');}
// // }
//
// // for (let i = 0; i <= coursesAndDurationArray.length-1; i++) {
// //     if (coursesAndDurationArray[i].monthDuration>5) {
// //     console.log('super');}
// // }

// let students = {
//     st1:{name: 'Anna', age: 20},
//     st2:{name: 'Olga', age: 25},
//     st3:{},
//     }
//  як студенту 3 додати ці поля, саме з даних що приходять ззовні