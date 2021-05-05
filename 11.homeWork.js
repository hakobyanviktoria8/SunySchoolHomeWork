//1. Գրել ծրագիր , որ կփոխի img1.jpg div-ի մեջ գտնվող p-երի
// տեքստերը New text արտահայտությունով:
//
//
// let ps = document.querySelectorAll("#demo p");
// [...ps].map(x=>x.innerText = "New Text");

// let paragraphs = document.querySelectorAll("#demo p");
// for (let p of paragraphs){
//     p.innerText = "New text"
// }
//
// [...paragraphs].map(x => x.innerText = "New some text");

// 2.Ունենք 7 տողանոց և 7 սյունյականոց  աղյուսակ, որի բոլոր բջիջներում գրված է cell:
// Գրել կոդ , որը  անկյունագծի cell փոխարինի թվերով ինչպես img2-ում է:
//
//
// let table = document.querySelector("#table");
// console.log(table.rows);
// let rows = table.rows, cells = rows[0].cells;
// console.log(rows[0].cells);
//
// [...rows].map((x,i)=>rows[i].cells[i].innerText = 0);


// function table_cell_change() {
//     let table = document.querySelector("#table tbody");
//
//     // console.log(table.rows);
//     for (let i = 0; i < table.rows.length; i++){
//         // console.log(table.rows[i]);
//         // console.log(table.rows[i].cells[i]);
//         table.rows[i].cells[i].innerText = i
//     }
// }
// table_cell_change();

// function table2_func(n) {
//     let table2 = document.querySelector("#table2");
//     let tbody = document.createElement("tbody");
//     for (let i = 0; i < n; i++){
//         let tr = document.createElement("tr");
//         tbody.append(tr);
//         for (let j = 0; j < n; j++){
//             let td = document.createElement("td");
//             td.innerText = i === j ? i : "cell";
//             tr.append(td);
//         }
//     }
//     table2.append(tbody);
// }
// table2_func(7);


// 3․Ունենք էջ , որում կա p  թեգեր: Ստանալ զանգված որում հավաքված կլինի p թեգերի
// պարունակությունները և արտածել այդ զանգվածը:
//


// let ps= document.querySelectorAll("#ps p");
// let val= [...ps].map(x=>x.outerText);
// console.log(val);
//

// function p_s() {
//     let p_arr = [];
//     let ps = document.querySelectorAll("p");
//     // console.log(ps);
//     [...ps].map(p => p_arr.push(p.innerText));
//     console.log(p_arr);
// }
// p_s();
//
// let p_s2 = document.querySelectorAll("#ps p");
// // console.log(p_s2);
// let p_s_arr = [];
// for (let i = 0; i < p_s2.length; i++){
//     // console.log( p_s2[i].innerText);
//     p_s_arr.push(p_s2[i].innerText)
// }
// console.log(p_s_arr);

// 4․Ունենք վեբ էջ : Ստուգել արդյոք այդ body-ի մեջ գտնվող թեգերում  կա SUNNY SCHOOL բառը և
// արտածել այն թեգերի անուները որում այդ արտահայտությունը կա:

// let sunnySchool = document.children;
// console.log(sunnySchool);
// console.log(document.querySelectorAll('*'));
// console.log(new Set([...document.querySelectorAll('*')].map(x => x.outerText.includes("SUNNY"))).size>1&&"Include");


//
// let elems = document.body.children;
// for (let i of elems){
//     // console.log(i);
//     if (i.innerText.match("SUNNY SCHOOL")) {
//         console.log(i.tagName)
//     }
// }
//
// console.log(elems);
// [...elems].map(x => x.innerText.includes("SUNNY SCHOOL") &&
//     console.log(x.tagName)
// );



// 5.Ստեղծել ծրագիր որը կգտնի էջում գտնվող p թեգի  տեքստում քանի թիվ
// կա և արտածել այդ թվերի զանգվածը:


let p = document.querySelector("#psp");
console.log(p.outerText);
let str= p.outerText;
console.log(str.match(/\d/g));


// function num_count() {
//     let p_s = document.querySelectorAll("p");
//     console.log((/\d+/g).test([...p_s].map(x => x.innerText).join(",")));
//     console.log(([...p_s].map(x => x.innerText).join(",")).match(/\d+/g));
//
// }
// num_count();