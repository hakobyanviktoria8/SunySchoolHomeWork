// console.log(window.location);
// console.log(window.location.href);
// window.location.replace("./lolo");
// window.location.reload();

// console.log(window.history);
// window.history.back();
// window.history.forward();
// window.history.go(-2);
// console.log(window.navigator);
// // console.log(window.navigator.userAgent);
// window.navigator.geolocation.getCurrentPosition(function (data) {
//     console.log(data);
// });
// setTimeout(() => {
//     location.replace(' http://sunnyschool.am/ ');
// }, 3000);

// Example
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
// setCookie("name","valod",1000);
//
//
//
// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for(var i = 0; i <ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }
//
// console.log(getCookie("name"));


// let x = 10;
// function timesTen(){
//     let a = 2;
//     return a * 10;
// }
// let y = timesTen(x);
// console.log(y); // 100

// function add(a, b) {
//     return a + b;
// }
//
// function average(a, b) {
//     return add(a, b) / 2;
// }
//
// let x = average(10, 20);
//
// console.log(x);

//
// function task(message) {
//     // emulate time consuming task
//     let n = 10000000000;
//     while (n > 0){
//         n--;
//     }
//     console.log(message);
// }
// // console.log('Start script...');
// // task('Download a file.');
// // console.log('Done!');
//
// console.log('Start script...');
//
// setTimeout(() => {
//     task('Download a file.');
// }, 1000);
//
// console.log('Done!');
//


//1.Ստեղծել օբեկտ որում կա երկու հատկություն՝ այցելուի էկրանի լայնությունը և բարձրությունը:
// Ստեղծել կոճակ որին սեղմելիս կիմանաք այդ արժեքները:
//
//
// click1.onclick = () => {
//     console.log("Height = ",window.screen.height,"width = ",window.screen.width);
// };

// 2.Գրել ծրագիր , որը կստուգի եթե այցելու էկրանի չափը փոքր է 768px ապա հղումը փոխի դեպի
// m.facebook.com, այլապես facebook.com(location.replace())
//
//
// window.location.replace(window.screen.width > 768 ? "https://facebook.com" : "https://m.facebook.com");
// console.log(window.location);

// 3.Ունենք form , որով այցելուն մուտքագրում է իր էլ. հասցեն  և submit անում:
// Ստեղծել ծրագիր , որը չերևացող input որպես value կգրի YES եթե այցելու բրաուզերը
// Chrome (navigator.userAgent.indexOf("Chrome")) է և NO եթե այլ բրաուզեր է : Submit ժամանակ
// այդ արժեքը նույնպես պետք է ուղարկվի սերվեր:
// Submit ժամանակ արտածել input value-ները (, իսկ event.preventDefault() Submit ժամանակ գործողությունը կանգնեցնելու համար):
// //
// document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     this.elements.text1.value = window.navigator.userAgent.includes("Chrome") ? "YES" : "NO";
//     console.log("here");
//     this.submit();
// });


// 4.Ունենք հղում դեպի sunnyschool.am:Գրել ծրագիր որ այցելուն երբ սեղմի հղման
// լրացուցիչ հարց ստանա արդյոք հղում բացի նոր window թե նույնի  մեջ:
// Եթե այցելուն confirm անի թող բացի նոր window մեջ, եթե ոչ ապա նույն էջում բացի
// Sunny School կայքը:
//
//
// document.getElementById("aa").addEventListener("click", function (e) {
//     e.preventDefault();
//     let bool = confirm("Yes or No");
//     bool ? window.open(this.getAttribute("href")): window.location.href = this.getAttribute("href");
// });


// 5.Ունենք HTML,CSS,Bootstrap,JavaScript, jQuery, Node.JS զանգված:
// Գրել ծրագիր որով այցելու կարող է թերթել այս ցանկի բոլոր անդամներ երբ սեղմի առաջ կամ հետ գնալու կոճակներ,
// կամ ծրագիրը ավտոմատ 3 վարկյան մեկ փոխի: Էջը բացելիս պետք է երևա զանգված առաջին անդամը,
// երբ առաջ գնալով հասնենք վերջին անդամին (Node.JS) դրանից հետո առաջ սեղմելիս երևա կրկին առաջին անդամը,
// իսկ երբ առաջին անդամից հետ ուզենք գնանք երևա զանգվածի վերջին անդամը (Նկ. Home5.jpg):

let arr = ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Node.JS"];
let span = document.getElementById("span");

let i = 0;
span.innerText = arr[i];

const right = function () {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    span.innerText = arr[i];
};
document.getElementById("Next").onclick = right;
document.getElementById("Prev").onclick = () => {
    if (i === 0) {
        i = arr.length - 1
    } else {
        i--;
    }
    span.innerText = arr[i];
};

setInterval(right, 3000);









