//1.Գրել ֆունկցիա, որը կհաշվի երկու թվերի տարբերության մոդուլը(միշտ տարբերությունը դրական թիվ լինի )

// const numberDiferent1 = (a,b) => Math.abs(a-b);
// console.log(numberDiferent1(2,5));
// console.log(numberDiferent1(-92,5));
//
// const numberDiferent2 = (a,b) =>{
//     return a - b < 0 ? (a - b) * -1 : a - b
// };
// console.log(numberDiferent2(3,5));

//2.Գրել ֆունկցիաներ, որոնցից առաջինը կստուգի արդյոք  մուտքագրված
// թիվը 25-65 հատվածում է թե ոչ, իսկ երկրորդը կստուգի թիվը պարզ է թե ոչ,
// պարզ են այն թվերը , որոնք իրենց կամ մեկի վրա են բաժանվում:
// Գրել կոդ որ կկանչի այս երկու ֆունկցիաներին մուտքագրված թվի համար,
// եթե երկու պայմաններին  էլ բավարարի թող արտածի <<ճիշտ է>> բառը,
// իսկ եթե գոնե մեկին չի բավարարում արտածի սխալ է բառը:


// const n_to_m_number = () => {
//     const num = prompt("Please enter 25 to 65 number!");
//     alert( num > 25 && num < 65 ? is_prime(num) : `սխալ է, \n the number is out of range`)
// };
// const is_prime = num => {
//     console.log("hi");
//     let message;
//     for (let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0 ){
//             return  `սխալ է, \n the number isn't prime number`
//         } else{
//             message = `ճիշտ է, \n the number is a prime number`
//         }
//     }
//     return message
// };
// n_to_m_number();

// const num = prompt("Please enter 25 to 65 number!");
// const n_to_m_number = (num) => num >= 25 && num <= 65;
// console.log(n_to_m_number(num));
//
// const is_prine = num => {
//     let prime = true;
//     for (let i = 2; i < num /2; i++){
//         if (num % i === 0) {
//             prime = false;
//             break;
//         }
//     }
//     return prime;
// };
// console.log(is_prine(num));
//
// const check_function = (fun1, fun2) => fun1 && fun2 ? "ճիշտ է" : "սխալ է";
// alert(check_function(n_to_m_number(num), is_prine(num)));



//3.Գրել ֆունկցիա , որը կստուգի արդյուք  օբյեկտը դատարակ է թե ոչ:

// const  emptyObjKeys = (obj) =>  Object.keys(obj).length ? "Object isn't empty" : "Object is empty";
// const  emptyObjValues = (obj) =>  Object.values(obj).length ? "Object isn't empty" : "Object is empty";

// const  emptyObjHasOwnProperty = (obj) => {
//     for (let key in obj) {
//        if(obj.hasOwnProperty(key)){
//            return "Object isn't empty"
//        }
//     }
//     return "Object is empty";
// };

// console.log(emptyObjKeys({}));
// console.log(emptyObjKeys({a: 123}));
// console.log(emptyObjValues({}));
// console.log(emptyObjValues({a: 123}));
// console.log(emptyObjHasOwnProperty({}));
// console.log(emptyObjHasOwnProperty({a: 123}));

//4.Կա օբեկտ  box անունով, որը ունի   հատկություններ big 250 արժեքով, middle 400 արժեքով  և small 350 աժեքով:
// Գրել ֆունկցիա որը կհաշվի այս հատկությունների աժեքների գումարը:

// const box = {
//     big: 250,
//     middle: 400,
//     small: 350,
// };

// const propertySum = obj => Object.values(box).reduce((a,b)=>a+b);

// const propertySumFor = obj => {
//     let sum = 0;
//     for (let key in box){
//         sum += box[key]
//     }
//     return sum;
// };

// console.log(propertySum(box));
// console.log(propertySumFor(box));

// const box = {
//     big: 250,
//     middle: 400,
//     small: 350,
//     getSum : function() {return this.big + this.middle + this.small}
// };
//
// console.log(box.getSum());

// 5.Ստեղծեք մարդ օբյեկտ: Այն պետք է ունենա անուն, ազգանուն, սեռ և տարիք հատկությունները:
// Ստեղծեք մեթոդ, որը կախված նրանից թե տվյալ մարդը ինչ սեռի ներկայացուցիչ է և որ տարիքային խմբին
// է պատկանում թող արտածի համապատասխան թեքստը:
//
//     ➢ Եթե նա կին է
// o մեծ  63-ից, ապաարտածում է ՙՙնա տատիկ է՞՞:
// o Եթե 17-63 տարեկան է, ապա արտածում է ՙՙնա աշխատող է՞՞:
// o Եթե 0-17, ապա  արտածում է ՙՙնա փոքր աղջիկ է՞՞:
// ➢ Եթե նա տղամարդ է
// o մեծ 65-ից, ապա արտածում է  ՞՞նա պապիկ է՞՞:
// o Եթե 17-65 տարեկան է, ապա արտածում է  ՞՞նա աշխատող է՞՞:
// o Եթե 0-17, ապա  արտածում է ՞՞նա փոքր տղա է՞՞:
//
// Մինչև այս մեթոդը կանչելը այցելուն կարող է prompt-ով փոխել  սեռը և տարիքը կամ թողնել նույնը, որից հետո կիմանա իր կարգավիճակը:

// const gender = prompt("Please enter your gender: Mail or Femail");
// const age = prompt("Please enter your age");
//
// let people = {
//     fName: "",
//     lName: "",
//     gender: "",
//     age: "",
// };
//
// const sortGender =(gender, age) => {
//     if(gender === "Mail") {
//         return age > 65 ? "նա պապիկ է" : age > 17 ? "նա աշխատող է" : "նա փոքր տղա է";
//     } else if(gender === "Femail"){
//         return age > 65 ? "նա տատիկ է" : age > 17 ? "նա աշխատող է" : "նա փոքր աղջիկ է";
//     } return "You have entered wrong input!"
// };
// alert(sortGender(gender, age));


