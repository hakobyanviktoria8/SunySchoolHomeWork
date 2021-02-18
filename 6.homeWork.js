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

// 3. Ստեղծել օբեկտ : Պատահական գեներացնել օր ամիս տարի 1919 թվականից այս կողմ:
// Oբեկտի համար ստեղծել մեթոդ , որ կհաշվի տվյալ պատահական ամսաթվից քանի տարի է անցել մինչև այսօր, ընդ որում հաշվի պետք առնի ամբողջ տարիների քանակը:

function foo() {
    let time1919 = new Date(+((new Date().setFullYear(1919)*(-1)) * Math.random()).toFixed());
    let oldYear = time1919.getFullYear();
    let newYear = new Date().getFullYear();
    return newYear - oldYear
}
console.log(foo());



// 4.while և for  ցիկլի միջոցով հաշվել 0  մինչև 10 միլիոն թվերի 1000 աստիճանը և  տեսնել ,
// որ ցիկլն է ավելի արագ հաշվում: Արտածել երկուսի հաշվման ժամանակները:

// function foo1() {
//     let foo1_time = new Date();
//     let  i = 0;
//     while (i < 10000000) {
//         Math.pow(i,1000);
//         i++
//     }
//     return  new Date() -foo1_time
// }
// function foo2() {
//     let foo2_time = new Date();
//     for (let i = 0; i < 10000000; i++){
//         Math.pow(i,1000);
//     }
//     return  new Date() - foo2_time
// }
// console.log(foo1());
// console.log(foo2());

// 5.Ստեղծել ֆունկցիա, որ մեկ վայրկյան պարբերությամբ կարտածի թվեր,
// այն տիրությում, որին , որպես պարամետրեր տրված կլինի ֆունկցիայում:
// Օրինանակ printNumbers(5, 10) կարտածի 5,6, 7,8,9, 10 մեկ վարկյան պարբերությամբ:

// function printNumbers(a, b) {
//     setInterval(()=>{
//          console.log(+Math.floor(Math.random() * (b - a) + a + 1).toFixed())
//     },1000)
// }
// printNumbers(5, 10);




