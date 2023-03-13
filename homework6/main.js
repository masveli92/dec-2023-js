// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);
//======================================================================================================================
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log(uperstr1 = str1.toUpperCase());
// console.log(uperstr2 = str2.toUpperCase());
// console.log(uperstr3 = str3.toUpperCase());
//=====================================================================================================================
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// console.log(lowerstr1 = uperstr1.toLowerCase());
// console.log(lowerstr2 = uperstr2.toLowerCase());
// console.log(lowerstr3 = uperstr3.toLowerCase());
//=====================================================================================================================
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.trim());
//=====================================================================================================================
// // - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// // let str = 'Ревуть воли як ясла повні';
// // let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str4 = 'Ревуть воли як ясла повні';
//
// const strToArr = () => console.log(str4.split(' '));
// strToArr(str4);
//=====================================================================================================================
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
//
// console.log(arr.map(value => value.toString()))
//====================================================================================================================
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// // в залежності від значення аргументу direction.
//  let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// const sortNums = (arr, order) => {
//    switch (order) {
//        case 'ascending':
//            return arr.sort((a,b) => a-b);
//        case 'descending':
//            return arr.sort((a,b) => b-a);
//        default:
//            return "order not correct"
//    }
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
// console.log(sortNums(nums, 'sdfggfh'));
//=================================================================================================================
// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a, b) =>  b.monthDuration - a.monthDuration))

// // -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(value => value.monthDuration>5))

// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// console.log(coursesAndDurationArray.map((value, index) => ({...value, id:index + 1})))

// ====================================================================================================================
// //     описати колоду карт (від 6 до туза без джокерів)
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
// let cards = [
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
// ]

// // - знайти піковий туз
// console.log(cards.find(card =>(card.cardSuit === 'spade' && card.value === '6')));
// // - всі шістки
// console.log(cards.filter(card =>(card.value === '6')));
// // - всі червоні карти
// console.log(cards.filter(card =>(card.color === 'red')));
// // - всі буби
// console.log(cards.filter(card =>(card.cardSuit === 'diamond')));
// // - всі трефи від 9 та більше
// console.log(cards.filter(card =>(card.cardSuit === 'clubs' && ['9','10', 'ace','jack','queen','king'].includes(card.value))));

//=====================================================================================================================
// //     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //     diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
//
// const box = cards.reduce((acc,current)=>{
//  acc[current.cardSuit].push(current);
//  return acc;
//  },{ spade:[], diamond:[], heart:[], clubs:[] }
// );
// console.log(box);
// --------------variant2------------------------
// const cardDeck = cards.reduce((acc,current)=>{
//  switch (current.cardSuit){
//      case "spade":
//          acc.spades.push(current);
//          break;
//      case "diamond":
//          acc.diamonds.push(current);
//          break;
//      case "heart":
//          acc.hearts.push(current);
//          break;
//      case "clubs":
//          acc.clubs.push(current);
//          break;
//      default:console.log('error')
//  }
//  return acc;
//  },{ spades:[], diamonds:[], hearts:[], clubs:[] }
// );
// console.log(cardDeck);

//=====================================================================================================================
// //     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // --написати пошук всіх об'єктів, в який в modules є sass
// console.log(coursesArray.filter(value => value.modules.includes('sass')));
// // --написати пошук всіх об'єктів, в який в modules є docker
// console.log(coursesArray.filter(value => value.modules.includes('docker')));

