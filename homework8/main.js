// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User (id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let UserArr =[];
// UserArr.push(new User (1,'Olena', 'Ivanenko', 'ghj@hijk.com', 123456789),
//     new User (2,'Anna', 'Ivashenko', 'guhpbn@hijk.com', 123456789),
//     new User (3,'Olha', 'Petrenko', 'qerfg@hijk.com', 123456789),
//     new User (4,'Iryna', 'Kovalenko', 'jythr@hijk.com', 123456789),
//     new User (5,'Oksana', 'Chernenko', 'opkkg@hijk.com', 123456789),
//     new User (6,'Mariia', 'Yevchenko', 'pokmm@hijk.com', 123456789),
//     new User (7,'Inna', 'Tyschenko', 'pokijn@hijk.com', 123456789),
//     new User (8,'Mila', 'Dovzhenko', 'lkjbbe@hijk.com', 123456789),
//     new User (9,'Victoria', 'Stepko', 'ertyhgfv@hijk.com', 123456789),
//     new User (10,'Kateryna', 'Onyschenko', 'axcvrr@hijk.com', 123456789),
// );
// console.log(UserArr)
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(UserArr.filter((User) => !(User.id % 2)));
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по спаданню (sort)
// console.log(UserArr.sort((a, b) => b.id - a.id));

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//      this.id = id;
//      this.name = name;
//      this.surname = surname;
//      this.email = email;
//      this.phone = phone;
//      this.order = order;
//     }
// }
// let clientBase =[];
// clientBase.push(
//     new Client(1,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['onion', 'banana', 'avocado', 'coconut', 'almond', 'bulgur']),
//     new Client(2,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['cherry','water','lemon']),
//     new Client(3,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['bun','milk']),
//     new Client(4,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['butter','cola','apricot', 'bread']),
//     new Client(5,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['juice']),
//     new Client(6,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['chocolate','tea','lemon','peach','nuts']),
//     new Client(7,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, []),
//     new Client(8,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['rice','meat','pepper', 'salad', 'tomato','cucumber']),
//     new Client(9,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['potato','chicken breast','oil','milk','carrot','juice', 'fanta' ]),
//     new Client(10,'Oleg','Shevchenko', 'nbvfdr@erger.com', 234567890, ['meat', 'bread', 'cola', 'potato', 'olive', 'salt', 'tomato', 'salad']),)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clientBase.sort((a, b) => a.order.length - b.order.length));

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function CarCreator (model, fabric, year, maxSpeed, volume){
//      this.model = model;
//      this.fabric = fabric;
//      this.year = year;
//      this.maxSpeed = maxSpeed;
//      this.volume = volume;
//      this.drive = function (){
//         console.log(`Drive with ${this.maxSpeed} per hour`)
//      };
//      this.info = function () {
//          for (const field in this) {
//            if (typeof this[field]!= "function"){
//              console.log(`${field}: ${this[field]}`)
//            }
//          }
//      }
//      this.increaseMaxSpeed = function (newSpeed){
//          this.maxSpeed+=newSpeed
//     };
//      this.changeYear = function (newValue) {
//          this.year = newValue
//      };
//      this.addDriver = function (driver){
//          this.driver = driver
//      };
// }
//
// car = new CarCreator('higlander', 'toyota', 2020, 180, 3.2);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2021);
// car.addDriver('Oleksandr');
// console.log('==========================================');
// car.info();

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// // об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class CarCreator {
//     constructor(model, fabric, year, maxSpeed, volume) {
//         this.model = model;
//         this.fabric = fabric;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.drive = function (){
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//         this.info = function (){
//             for (const key in this) {
//                 if (typeof this[key] != "function" ) {
//                    console.log(`${key}: ${this[key]}`)
//                 }
//             }
//         };
//         this.increaseMaxSpeed = function(newSpeed){
//             this.maxSpeed+=newSpeed
//         }
//     }
//     changeYear(newValue) {
// this.year=newValue;
// }
//     addDriver (driver){
//         this.driver = driver
//     }
// }
// car = new CarCreator('higlander', 'toyota', 2020, 180, 3.2);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2021);
// car.addDriver('Oleksandr');
// console.log('==========================================');
// car.info();

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// function Cinderella (name, age, legSize){
//         this.name = name;
//         this.age = age;
//         this.legSize =legSize;
// }
//
// let cinderellaArr= [];
// cinderellaArr.push(new Cinderella( 'Elsa',16, 37),
//     new Cinderella( 'Ariel',16, 36),
//     new Cinderella( 'Fiona',16, 38),
//     new Cinderella( 'Bell',16, 39));
//
// class Prince {
//     constructor(name, age, shoeSize) {
//             this.name = name;
//             this.age = age;
//             this.shoeSize = shoeSize;
//     }
//     princes(){
//         for (const cinderella of cinderellaArr) {
//             if(this.shoeSize === cinderella.legSize){
//                 console.log(`${cinderella.name} is my Cinderella`)
//             }
//         }
//     }
//     cinderella(){
//         console.log(cinderellaArr.find((girl)=>girl.legSize === this.shoeSize))
//     }
// }
// let prince = new Prince('Jack',18,36);
// prince.princes();
// prince.cinderella()
