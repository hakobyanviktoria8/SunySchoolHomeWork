//1.Ունենք էջ որում կա form՝ input-ներով: Երբ միաժամանակ սեղմենք Ctrl և m պետք է form անհետանա
// և հայտնվի հետևյալ տեքստը՝ Thanks for message.
//

// window.addEventListener("load", function () {
//     const message = document.querySelector("#message");
//     document.querySelector("form").addEventListener("keydown", function (event) {
//         if (event.ctrlKey && event.code === "KeyM"){
//             this.classList.add("hideElement");
//             message.classList.remove("hideElement")
//         }
//     });
// });

// window.onload = function() {
//     let form = document.querySelector("form");
//     let message = document.querySelector("#message");
//     form.onkeydown = function(event) {
//         if(event.ctrlKey && event.code === "KeyM") {
//             this.classList.add("hideElement");
//             message.classList.remove("hideElement")
//         }
//     }
// };

// 2.Ունենք input : Գրել ծրագիր , որ այցելուին թույլ չի տա  այդ input գրել N կամ  n
// տառերը և այդ տառերը գրելիս alert կանի արգելված է:
//
// window.onload = function() {
//     const input = document.querySelector("#homework13 input");
//     input.onkeydown = (e) => {
//         if (e.code === "KeyN") {
//             e.preventDefault();
//             alert("Արգելված է")
//         }
//     }
// };

// 3.Ունենք էջում հ1, button, p թեգեր: Սեղծել ծրագի որ եթե այս էլեմենտներին սեղմենք ստեղծի օբեկտ
// որի մեջ լինի երեք հատկություն ,
//  որոնց վրա կպահպանվի իրադարձության հետևյալ տվյալները՝ event.target.tagName, event.clientX,
// event.clientY:
//  Ստեղծված օբեկտները հավաքել զանգվածում և էջը բացելուց 10 վակյան հետո console արտածել
// սեղմված էլեմնետների ցանկը:

window.onload = function () {
    const arr = [];
    const h1 = document.querySelector("#h1");
    const button = document.querySelector("button");
    const p = document.querySelector("p");

    const getElemData = (e) => {
        const obj = {};

        obj.tagName = e.target.tagName;
        obj.clientX = e.clientX;
        obj.clientY = e.clientY;
        arr.push(obj)
    };

    h1.addEventListener("click", getElemData);
    button.addEventListener("click", getElemData);
    p.addEventListener("click", getElemData);

    setTimeout(() => {
        console.log(arr)
    }, 10000);

};

//
// 4.Ունենք գաղտնաբառի input: Ստեղծել գաղտնաբառի ամրությունը ստուգող ֆունկցիա:
// Երբ այցելուն input սկսում մուտքագրել և սիմվոլների քանակը 3-ից քիչ է ,
// ապա input հարևանությամբ գրի weak բառը: Երբ սիմվոլների քանակը 3-ից մեծ է
//  input-ի հարևանությամբ գրվի normal բառը, իսկ երբ մուտքագրվի ! կամ @  սիմվոլն
// երը input-ի հարևանությմաբ գրվի strong բառը:
//
//
// window.onload = function () {
//     let input = document.querySelector("input");
//     let span = document.querySelector("span");
//     input.addEventListener("keypress", function (e) {
//         // console.log(input.value);
//         span.innerText = input.value.length < 3 ? "weak" :
//             (input.value.includes("@") || input.value.includes("!")) ? "strong" : "normal"
//     })
// };


// 5.Ստեղծել հայաստանյան հեռախոսահամարները ստուգող ֆունկցիա, որը առաջին մասը կլինի ստատիկ +374 գրված:
// հետո կլինի select հայաստանյան օպերատորների հեռախոսհամարների կոդերից կազմված (Օրինակ 91,93,94,95,98,99,77,55):
// Որից հետո կլինի input , որտեղ կկարողանա գրել միայն 6 թվանշան, այլ սիմվոլ պետք է չկարողանա գրել:
// Ունենալ button , որին սեղմելուց հետո եթե ամբողջությամբ լրացված չէ հեռախոսահամրը կարմիր border ավելցանի
// համապատասխան էլեմենտին (select-ին կամ input-ին),
//  հակառակ դեպքում console.log անել ամբողջ հեռախոսահամարը։


window.onload = function () {
    const codes = ["",91, 93, 94, 95, 98, 99, 77, 55];
    const select = document.createElement("select");
    const input = document.createElement("input");
    const button = document.querySelector("button");

    select.innerHTML =
        codes.map(code =>
            `<option value="${code}">${code}</option>`
        );
    document.querySelector("#ex5").appendChild(select);


    input.addEventListener("keydown", function (e) {
        if ((isNaN(e.key) || input.value.length > 5) && e.key !== "Backspace") {
            e.preventDefault()
        }
    });
    document.querySelector("#ex5").appendChild(input);

    button.addEventListener("click", function () {
        let bool = true;
        if (input.value.length !== 6){
            input.style.border = "1px solid red";
            bool = false;
        } else {
            input.style.border = "1px solid green";
            bool = true;
        }
        if (!select.value){
            select.style.border = "1px solid red";
            bool = false;
        } else {
            select.style.border = "1px solid green";
            bool = true;
        }
        bool && console.log("+374",select.value, input.value)
    });
};




