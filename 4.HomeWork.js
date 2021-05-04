// 1.Գրել կոդ , որը կստուգի մուտքագրված է արդյոք թիվ
// և եթե թիվ է այդ թվից քառակուսի արմատ կհանի:

// let num = +prompt("Number");
// if (!isNaN(num)) {
//     console.log("Namber " + Math.sqrt(num).toFixed());
// }


// const number = prompt("Please enter number");
// const checkNumber = (num) => !isNaN(num) ? Math.sqrt(num) : "Not a number";
// const checkNumber = (a) => typeof +a ==="number" ? +Math.sqrt(a).toFixed(2) : "NaN";
// alert(checkNumber(number));


//2.Պատահական 5 թիվ գեներացնել 0-10 տիրույթում  այնպես որ , 0-5 տիրույթի թվերը կլորանան դեպի վերև իսկ
// 5-10 տիրույթի թվերը դեպի ներքև և արտածել պատահական թիվը և կլորացած թիվը :
// (function foo() {
//     let max = 10;
//     for (let i = 0; i < 5; i++) {
//         let num = Math.random() * max + 1;
//         if (num < 5) {
//             console.log(num, Math.ceil(num));
//         } else {
//             console.log(num, Math.floor(num));
//         }
//     }
// })();

// const randomFunc = () => {
//     for (let i = 0; i < 5; i++){
//         let n = Math.random() * 10 + 1;
//         alert(Math.round(n) <= 5 ? Math.ceil(n) + ", " + n.toFixed(2)
//             : Math.floor(n) + ", " + n.toFixed(2));
//     }
// };
// randomFunc();

//3.Գրել ֆունկցիա, որը տրված բառի վերջին տառը կդարձնի մեծատառ:

// const toUpperCaseFunc = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// const toUpperCaseFunc = (str) => str.slice(0, str.length-1) + str[str.length-1].toUpperCase();

// console.log(toUpperCaseFunc("Hello"));
// console.log(toUpperCaseFunc("Suny"));
// console.log(toUpperCaseFunc("Nodejs"));

//4. Գրել Ֆունկցիա, որ մուտքագրված բառից կարտածի միայն զույգ ինդեքս ունեցող տառերը: Օրինակ barev կդառնա brv


// const evenOddIndex = (str) => {
//     let evenStr = "";
//     for (let i = 0; i < str.length; i+=2){
//         evenStr += str.charAt(i)
//     }
//     return evenStr
// };
//
// console.log(evenOddIndex("barev"));
// console.log(evenOddIndex("hello!"));

//5.Գրել ծրագիր , որը Prompt պատուհանի title-ում կգեներացնի 5 նշանոց կոդ տառերից և թվերից կազմված և
// եթե այցելուն ճիշտ հավաքի այդ կոդը prompt պատուհանում և հաստատի ապա alert անի ճիշտ է, այլապես alert անի սխալ է:

//
// (function foo() {
//     let min = 48, max = 122, str = "";
//     for (let i = 0; i < 5; i++) {
//         let num = Math.random() * (max - min + 1) + min;
//         str += String.fromCharCode(num);
//     }
//     let x = prompt("Write right " + str);
//     console.log(x === str ? "ճիշտ է" : "սխալ է", str);
// })();


//48-57 number
//65-90 LETTER
//97-122 letter

// const randomKode = () => {
//     let rangeNumber = 57 - 48;
//     let rangeLETTER = 90 - 65;
//     let rangeLetter = 122 - 97;
//     let randomNumber = Math.floor(Math.random() * (rangeNumber + 1) + 48);
//     let randomLETTER = Math.floor(Math.random() * (rangeLETTER + 1) + 65);
//     let randomLetter = Math.floor(Math.random() * (rangeLetter + 1) + 97);
//     console.log(String.fromCharCode(randomNumber));
//     console.log(String.fromCharCode(randomLETTER));
//     console.log(String.fromCharCode(randomLetter));
//
//     const generCode = String.fromCharCode(randomNumber) + String.fromCharCode(randomLETTER)
//         + String.fromCharCode(randomLetter) + String.fromCharCode(randomLETTER) + String.fromCharCode(randomNumber);
//     console.log(generCode);
//     const enterCode = prompt("Please enter " + generCode);
//     alert(enterCode === generCode ? "ճիշտ է" : "սխալ է");
// };
// randomKode();

//առավել հեշտ տարբերակ, սակայն կընդգրկի նաև սիմվոլները
//String.fromCharCode(Math.floor(Math.random() * (122-48 + 1) + 48))

let arr=[1,2,3,4];
for (let val of arr){
    console.log(val)
}

let obj = {
    a:1,
    b:2,
    c:3
};
for (let val in obj){
    console.log(obj[val])
}


