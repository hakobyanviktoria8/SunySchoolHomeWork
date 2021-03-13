//1.Գրել ծրագիր որը կստեղծի input  թեգ, որի տալ value  Ձեր անունը և ներմուծել  body-ի։
//

// const input = document.createElement("input");
// input.value = "Viktorya Hakobyan";
// document.body.appendChild(input);
// console.log(input.value);


// 2.Այցելուն input դաշտում գրում է ինչ որ բան։
// Գրել ծրագիր որը կոդը բացելուց  5 վարկյան հետո  հետո կարտածի գրվածի մեջ կա @ թե ոչ։Արտածել "Yes" կամ "No":
//

// setTimeout(function () {
//     const input = document.querySelector("#homeWork12_2 input");
//     console.log(input.value);
//     const  message = input.value.includes("@")? "Yes" : "No";
//
//     alert(message)
// },5000);

// 3.Գրել կոդ , որը կստեղծի  img թեգ, որի src  աղբյուրի տալ որևէ նկարի հղում,
// տալ width և height համապատասխանաբար 400px և 200px չափեր և ներմուծել body:
//

// const img = document.createElement("img");
// img.src = "https://user.oc-static.com/files/6001_7000/6410.jpg";
// img.width = 400;
// img.height = 200;
// document.body.append(img);

// 4.Ունենք օբեկտ, որը ունի tagN,id,content հատկությունները։
// Այդ օբեկտից ստեղծել թեգ tagN արժեքով(Օրինակ tagN:"p",),
// տալ id-ի  id հատկության արժեքով և պարունակություն content հատկության արժեքով։
// Ստեղծել մեկնաբանություն այդ պահի ամսաթվով որ ներմուծել body,
// որից հետո ներմուծել թեգը։
//

// const obj = {
//     tagN:"p",
//     id:  +new Date(),
//     content: "Text 1"
// };
// const  tagName = document.createElement(obj.tagN);
// tagName.id = obj.id;
// tagName.innerText = obj.content;
// document.body.appendChild(tagName);
// document.body.appendChild(document.createComment(`New Comment ${new Date()}`));

// 5.Ունենք 5 անդամից կազմված զանգված։ Զանգվածից ստանալ ցուցակ և արտածել բրաուզերում։
// Էջը բացելուց 2 վարկյան հետո պետք է բացվի prompt պատուհան և այցելուն մուտքագրի արժեք։
// Արժեքը պետք է հայտնվի արդեն բրաուզերում երևացող  ցուցակի սկզբում նաև ավելացվի
// զանգված մեջ բայց սկզբից։

// const  arr = ["1", "2", "3", "4", "5"];
// const ol = document.createElement("ol");
//
// arr.map(x=> {
//     let li = document.createElement("li");
//     li.innerText = x;
//     ol.appendChild(li)
// });
// document.body.appendChild(ol);
//
// setTimeout(function () {
//     let value = prompt("Please enter value");
//     let li = document.createElement("li");
//     li.innerText = value;
//     let lis = [li, ...document.querySelectorAll("ol li")];
//     console.log(lis);
//     lis.forEach(li => ol.appendChild(li));
// },2000);
// document.body.appendChild(ol);









