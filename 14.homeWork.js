//1.Ունենք էջ որում կա input և a թեգ, որը հղում է դեպի sunnyschool.am: Եթե այցելուն սեղմում է հղման սեղմի ,
// ծրագիրը մինչև հին էջը լքել ստուգի եթե այցելուն 10 վայրկյանից ավել է եղել էջում  ապա զգուշացնի որ փոփոխությունները
// հնարավոր է չպահպանվեն:
//

// setTimeout(function () {
//     window.addEventListener("beforeunload", function (e) {
//         e.preventDefault();
//         e.returnValue = false;
//     })
// },10000);

// 2.Անջատել body paste անելու հատկությունը և սարքել copyCounter
// կոճակ որին սեղմելիս  կարտածի body  copy-ների քանակը:
//
// window.addEventListener("load", function(){
//     document.body.addEventListener("paste", function (e) {
//         e.preventDefault();
//     });
//
//     let copyCount = 0;
//
//     document.body.addEventListener("copy", function () {
//         copyCount++
//     });
//
//     document.getElementById("ex2").addEventListener("click", function () {
//         alert(copyCount);
//     })
// });


// 3.  Ունենք երկու input : Գրել ծրագիր որը թույլ չի տա երկրորդ input լրացնել
// մինչև առաջին input-ում որևէ բան գրված չլինի:
//
// window.addEventListener("load", function(){
//     const fname = document.getElementById("fname");
//     const lname = document.getElementById("lname");
//
//     lname.addEventListener("keydown", function (e) {
//         fname.value.length === 0 && e.preventDefault();
//     });
//     lname.addEventListener("focus", function (e) {
//         fname.value.length === 0 && fname.focus();
//     });
// });

// 4.Ունենք Red, Green, Blue գույների checkbox: Ստեղծել կոճակ որին
// սեղմելիս բոլորը կնշվեն երկրորդ անգամ նույն կոճակին սեղմենք բոլորը
// կդառնան չնշված:
//
// window.addEventListener("load", function () {
//     let inputs = document.querySelectorAll("#ex4 input");
//     let button = document.getElementById("butt");
//     let bool = false;
//
//     button.addEventListener("click", function () {
//         bool = !bool;
//         for (let input of inputs) {
//             input.checked = bool
//         }
//     });
//
// });


// 5.Ստեծել Sign Up Form ,որով այցելուն պետք գրանցվի հավաքելով email և
// password:Form submit անելուց հետո ստուգել եթե email համապատասխանում է
// չափանիշներին(էլ հասցեի կառուցվածքը ստուգել) և գաղտնաբառը 6 սիմվոլից շատ
// է ապա այս տվյալները պահել որևէ օբեկտում, որից հետո պետք է գրանցման ֆորման
// անհետանա հայտնվի Login Form, որտեղ եթե այցելուն ճիշտ հավաքի տվյալները
// տեսնի տեքստ՝ welcome.


window.addEventListener("load" , function () {
    const signUp = document.querySelector("#signUp form");
    const signIn = document.querySelector("#signIn form");
    let obj = null;

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    signUp.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        let bool = true;
        if (!validateEmail(email)){
            bool = false;
        }
        if (password < 7){
            bool = false;
        }
        if (bool){
            obj = {email, password};
            document.getElementById("signUp").classList.add("hideElement");
            document.getElementById("signIn").classList.remove("hideElement");

            console.log(obj);
        }
    });

    signIn.addEventListener("submit" , function (e) {
        e.preventDefault();
        const email = document.getElementById("emailSignIn").value;
        const password = document.getElementById("passwordSignIn").value;

        if (email === obj.email && password === obj.password){
            document.getElementById("signIn").classList.add("hideElement");
            document.getElementById("welcome").classList.remove("hideElement");
        }
    })
});




