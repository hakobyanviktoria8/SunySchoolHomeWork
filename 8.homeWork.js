//1.Ստեղծել ֆունկցիա, որը որպես պարամետր ընդունում է կամայական քանակությամբ
// թվեր և ստեղծում է մի նոր զանգված իրեն փոխանցած այն արգումենտներից,
// որոնք պարունակում են զրո թվանշան:
//


//
// function f(...arr) {
//     return [...arr].filter(x=>x.toString().includes("0"))
// }
//
// console.log("ekav",f(1, 2, 3, 4, 5, 50, 90, 80, 60));
//
//
// let nums = [100, 20, 3, 4, 5, 60, 70, 809, 9];
//
// function foo(a, nums, b) {
//     return [a, ...nums, b].filter(x => x.toString().includes("0"))
// }
//
// console.log(foo(10, nums, 30, 0));

// 2.Ունենք զանգված : Կլոնավորել այդ զանգվածը այնպես, որ նոր զանգվածին անդամ ավելացնենք
// հինը չփոխվի(spread operator):
//

// let a=[1,23];
// let b= [...a];
// a.push(2);
// console.log(a);
//
// console.log(b);
//
//
//
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = [...arr];
// arr.push(10);
// console.log(arr, newArr);

// 3.Գրել ֆունկցիա , որը գեներացնում է պատահական թիվ 0 ից 10 միջակայքում ,
// թիվը 5ից փոքր լինելու դեպքում կանչում է callback-ը 'success' արժեքով ,
// իսկ հակառակ դեպքում 'error' արժեքով։ callback-ի մեջ տպել արժեքը։


// function f() {
//     let num = Math.floor(Math.random()*10);
//     if (num<5){
//         (function() {
//             console.log("success",num);
//         })()
//     } else{
//         (function() {
//             console.log("error",num);
//         })();
//     }
// }
// f();


// //
// function randomFunc(callback) {
//     const num = Math.floor(Math.random() * 10 + 1);
//     console.log(num);
//     if (num < 5) {
//         callback("success")
//     } else {
//         callback("error")
//     }
// }
//
// randomFunc(function (data) {
//     console.log(data)
// });

// 4.ՈՒնենք բառերի զանգված: Ստեղծել ֆունկցիա որը զանգվածից կհեռացնի նույն տառերը
// ունեցող բառերը(կթողնի միայն մեկը) ընդորում մեծատառ փոքրատառ կապ չունի և կվերադարձնի
// նոր զանգված :
// Օրինակ՝
// ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"] ->
// [PAN, hectares, era];
// Օգտագործել Map
//


// let a= ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(new Set(a.map(x=>x.split("").sort().join("").toLowerCase())));

// //
// const words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// //
// function foo4(arr) {
//     let new_arr = [];
//     let map1 = new Map();
//     console.log(map1)
//     // debugger
//     arr.map(x => map1.set(x.toLocaleLowerCase().split("").sort().join(""), x));
//     [...map1.entries()].map((key) => new_arr.push(key[1]));
//
//     // for (let [key, val] of map.entries()) {
//     //     new_arr.push(val)
//     // }
//
//     return new_arr
// }
//
// console.log(foo4(words));


// 5.Ստեղծել Cart անունով constructor ֆունկցիա ․ Այն պետք է ունենա մեթոդ addProduct ,
// որով կկրողանանք հավաքել ապրանքներ ։ Ամեն ապրանքը օբեկտ է , որը ունի անուն և
// գին հատկություն։
// Ավելացնել մեթոդ , որը կվերադարձնի ավբողջ գումարը հավաքված
// ապրանքների։

function Cart() {
    this.arr = [{
        name: "All",
        price: 200
    }];

    this.addProduct = function (pro) {
        this.arr.push(pro);
    };
    this.addPrice = function () {
        return this.arr.reduce((sum,x)=>sum+x.price,0)
        //Ayl tarberak
        // let sum = 0;
        // this.arr.map(x => sum += x.price);
        // return sum
    }
}

let pan = new Cart();
console.log(pan);

pan.addProduct({
    name: "Apple",
    price: 10
});
pan.addProduct({
    name: "Bannana",
    price: 100
});

console.log(pan.arr);
console.log(pan.addPrice());

//
// function Cart() {
//     this.products = [
//         {name: "aaa", price: 90},
//         {name: "bbb", price: 10}
//     ];
//
//     this.addProduct = function (product) {
//         this.products.push(product)
//     };
//     this.sum = function () {
//         return this.products.map(x => x.price).reduce((a, b) => a + b, 0);
//     }
// }
//
// let cart = new Cart();
//
// cart.addProduct({name: "ccc", price: 100});
// cart.addProduct({name: "ddd", price: 10});
// console.log(cart.products);
// console.log(cart.sum());
//
//
//
//


