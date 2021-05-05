// 1.Ստեղծել օբեկտ, որը ունի   name: "John",  lastname:”Smith”, հատկություններ:
// Փոխել   lastname դրոշը այնպես, որ հնարավոր չլինի այն ջնջել:

// let user = {
//   name: "Jhon",
//   lastName: "Smith"
// };
// Object.defineProperty(user, 'lastName', {
//     configurable: false
// });
//
// console.log(user);
// delete user.lastName;
// console.log(user);

// 2.Ստեղծել  constructor  ֆունկիցա, որը կունենա 4 հատկություն և այդ constructor  ստեղծել
// 2 օբեկտ (Ազատ եք հատկություններ ընտրելու հարցում):

// function  User(fname, lname, age, work) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.work = work;
// }
// let ann = new User("Ann", "Dany", 22, true);
// let jhon = new User("Jhon", "Smith", 28, true);
// console.log(ann);
// console.log(jhon);


// 3.Ստեղծել Student կանստրոկտորը (name, age, university, years-սովորելու տարիների թիվը) հատկություններով:
// Student կասնտրուկտորը  օգտագործելով ստեղծել Armine օբեկտը:
//Student կանստրուկտիր ավելացնել մեթոդը, որը թույլ կտա իմանալ ուսանող ինչ տարիքում է  ընդունվել համալսարան:
//Մեթոդը կանչել Armine օբեկտի համար:

function Student(name, age, university, years) {
    this.name = name;
    this.age = age;
    this.university = university;
    this.years = years;
    this.getstayYear = function () {
        return this.age - 4 - this.years
    }
}

let arminen = new Student("Armine", 21, "USA", 3);

// function  Student(name, age, university, years) {
//     this.name = name;
//     this.age = age;
//     this.university = university;
//     this.years = years;
//     this.getYear = function () {
//         return this.years - this.age
//     }
// }

// let armine = new Student("Armine", 20, "USA", 5);
// console.log(armine.getYear());
//
// Student.prototype.ageCount = function() {
//     alert( this.age - this.years + " age.");
// };
// console.log(armine);
// armine.ageCount();

//4. Ստեղծել Car constructor ֆունկցիա , որը ունի name, year, color, maxSpeed հատկությունները,
// ստեղծել bmw և mercedes օբեկտները Car constructor միջոցով:
//     maxSpeed-ը 200-ից 500 միջակայքի պատահական թիվ է․ Ստեղծել prototype-ով drive մեթոդ ,
// որը կախված maxSpeed-ից կտպի 0-ից 10 թվերը նույնքան միլիվայրկյան ինտեռվալը մեկ։
// Կանչել երկու օբեկտների համար։


// function Car(name, year, color) {
//     this.min =200;
//     this.max =500;
//     this.name = name;
//     this.year = year;
//     this.color = color;
//     this.maxSpeed = maxSpeeds(this.min, this.max)
// }
// function maxSpeeds (min,max){
//     return Math.floor(+(Math.random() * (max - min + 1)).toFixed() + min)
// }
//
// Car.prototype.drive = function () {
//     for (let i = 0; i <= 10; i++){
//         setTimeout(()=>{
//             document.write(i);
//         },i*this.maxSpeed)
//     }
//
// };
// let bmw = new Car("BmW",2020,"red",350);
// bmw.drive();


// function  Car(name, year, color) {
//     this.name = name;
//     this.year = year;
//     this.color = color;
//     this.maxSpeed = getMaxSpeed(200,500);
// }
//
// function getMaxSpeed(min,max){
//     return +(Math.random() * 200).toFixed() + 200
// }
//
// Car.prototype.drive = function () {
//     setTimeout(()=>{
//         for (let i = 0; i < 10; i++){
//             console.log(i)
//         }
//     }, this.maxSpeed)
// };
//
// console.log(Car.prototype.drive());
// let bmw = new Car("BMW", 2020, "White");
// let mercedes = new Car("Mersedes", 2020, "Gray");
// console.log(bmw);
// console.log(mercedes);

// 5.Ստեղծել FirstTwoLetterUpperCase մեթոդ  String տեսակի համար:
// Այն մեթեդ ցանկացած բառի առաջին երկու տառ դարձնում է մեծատառ:


// String.prototype.firstTwoLetterUpperCase = function()  {
//     return this.slice(0,2).toUpperCase() + this.slice(2);
// };


// a = "hello";
// // console.log(a);
// console.log("hello","hello".firstTwoLetterUpperCase());
// //
//
// let json = '{ "age": 30 }'; // incomplete data

try {

    let user = JSON.parse(json); // <-- no errors

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); // (*)
    }

    alert( user.name );

} catch(e) {
    alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}




//
// String.prototype.firstTwoLetterUpperCase = function(){
//     return this.slice(0,2).toUpperCase() + this.slice(2);
// };

// console.log("hello".firstTwoLetterUpperCase());
// console.log("world".firstTwoLetterUpperCase());








