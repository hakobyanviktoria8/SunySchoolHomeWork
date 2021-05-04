//1.Արտածել այն ամսաթիվը, որ կլինի ժամանակային հաշվարկի սկզբից 1 միլիարդ վայրկյան հետո:

// alert(new Date(1000000000));

// 2.Գրել ծրագիր, որը կհաշվի թե քանի վայրկյան է անցել տվյալ օրվա սկզբից մինչև ծրագիրը
// աշխատացնելը:


// const countMili = () => {
//     let start = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
//     setTimeout(()=>{
//         console.log("working");
//     }, 1000);
//
//     return new Date() - start
// };
// console.log(countMili());
// let startDay = new Date();
// startDay.setHours(0,0,0,0);
// console.log(new Date() - startDay);

// 3. Ստեղծել օբեկտ : Պատահական գեներացնել օր ամիս տարի 1919 թվականից այս կողմ:
// Oբեկտի համար ստեղծել մեթոդ , որ կհաշվի տվյալ պատահական ամսաթվից քանի տարի է անցել մինչև այսօր,
// ընդ որում հաշվի պետք առնի ամբողջ տարիների քանակը:

// const random = (max,min)=>Math.floor(Math.random()*(max-min +1) +min);
//
// let obj = {
//     day: random(1,31),
//     manth: random(0,11),
//     year: random(1919,2021),
//
//
//     count: function (){
//         return new Date(new Date() - new Date(this.year,this.manth,this.day))
//     }
// };
// console.log(obj.count());


// function foo() {
//     let time1919 = new Date(+((new Date().setFullYear(1919) * (-1)) * Math.random()).toFixed());
//     let oldYear = time1919.getFullYear();
//     let newYear = new Date().getFullYear();
//     return newYear - oldYear
// }
//
// console.log(foo());


// 4.while և for  ցիկլի միջոցով հաշվել 0  մինչև 10 միլիոն թվերի 1000 աստիճանը և  տեսնել ,
// որ ցիկլն է ավելի արագ հաշվում: Արտածել երկուսի հաշվման ժամանակները:
//
// function foo1() {
//     let foo1_time = new Date();
//     let i = 0;
//     while (i < 10000000) {
//         Math.pow(i, 1000);
//         i++
//     }
//     return new Date() - foo1_time
// }
//
// function foo2() {
//     let foo2_time = new Date();
//     for (let i = 0; i < 10000000; i++) {
//         Math.pow(i, 1000);
//     }
//     return new Date() - foo2_time
// }
// console.log(performance.now());
// console.log(foo1());
// console.log(performance.now());
// console.log(foo2());
// console.log(performance.now());


// 5.Ստեղծել ֆունկցիա, որ մեկ վայրկյան պարբերությամբ կարտածի թվեր,
// այն տիրությում, որին , որպես պարամետրեր տրված կլինի ֆունկցիայում:
// Օրինանակ printNumbers(5, 10) կարտածի 5,6, 7,8,9, 10 մեկ վարկյան պարբերությամբ:


// function oo(a, b) {
//     let i = 0;
//     setTimeout(() => {
//         while (a + i <= b) {
//             console.log(a + i);
//             i++;
//         }
//     }, 1000)
// }
//
// oo(5, 10);

/*
//chgitem incha
// function printNumbers(a, b) {
//     setInterval(()=>{
//          console.log(+Math.floor(Math.random() * (b - a) + a + 1).toFixed())
//     },1000)
// }
// printNumbers(5, 10);
*/


const  interval =(a,b)=> {
    setInterval(function () {
        if (a<=b){
            console.log(a);
            a++;
        }
    },1000);
};

interval(5,10);