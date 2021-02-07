//1.Տրված  են իրարից տարբեր 𝑎,𝑏,𝑐 և 𝑑 թվերը: Կազմել ծրագիր, որը կարտածի տրված թվերից մեծագույնի արժեքը:


function maxNumber(a,b,c,d) {
    //1example
    // if (a > b && a > c && a > d)
    //     return a;
    // else if (b > a && b > c && b > d)
    //     return b;
    // else if (c > a && c > b && c > d)
    //     return c;
    // else return d;

    // 2example
    // let max = a;
    // if (b > max)
    //     max = b;
    // if (c > max)
    //     max = c;
    // if (d > max)
    //     max = d;
    // return max;

    //3example
    // if (a > b && a > c && a > d)
    //     return a;
    // if (b > c && b > d)
    //     return b;
    // if (c > d)
    //     return c;
    // return d;

    //4example
    // return Math.max(a, b, c, d);
}
// console.log(maxNumber(11,2,3,4));
// console.log(maxNumber(11,22,3,4));
// console.log(maxNumber(11,2,33,4));
// console.log(maxNumber(11,2,33,44));


//2.For ցիկլի  միջոցով արտածել 1-ից 100 հատվածի թվերը, բացառությամբ 8 և 9 վրա բաժանվողների:
// Թող ցիկլը ընդհատվի  երբ հանդիպի միաժամանակ և 6 և 7 վրա բաժանվող թվի:

// for (let i = 1; i < 100; i++){
//     if(i % 8 === 0 || i % 9 === 0){
//         continue;
//     }
//     if (i % 6 === 0 && i % 7 === 0){
//         break;
//     }
//     console.log(i);
// }

//3.Քանի որ JavaScript-ում շաբաթվա օրերը համարակալված են 0-6 թվերով,
// switch միջոցով ստանալ ծրագիր, որ այդ միջակայքում մուտքագրված թվի համար կարտածի
// շաբաթվա տվյալ օրվա տառային տարբերակը:
// Իսկ եթե թիվը այդ միջակայքից  դուրս է արտածի Error:

// let num = prompt("Please write 0-6 number");
// let day;
// switch (+num){
//     case 0 : day = "Monday"; break;
//     case 1 : day = "Tuesday"; break;
//     case 2 : day = "Wednesday"; break;
//     case 3 : day = "Thursday"; break;
//     case 4 : day = "Friday"; break;
//     case 5 : day = "Saturday"; break;
//     case 6 : day = "Sunday"; break;
//     default: day = "Error"
// }
// alert("Weekly day is " + day);

//4.Գրել ծրագիր, որ թույլ կտա հաշվել այցելուի կողմից մուտքագրած 
// թիվը պարզ թիվ է թե ոչ: Պարզ են այն թվերը, որոնք բաժանվում են իրենց և 1-ի վրա:

// let num = +prompt("Please write a number");
// let prime = true;
// if (num === 1) alert("1 isn't prime numbr");
// else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {    // or i <= num / 2
//         if (num % i === 0) {
//             prime = false;
//             break;
//         }
//     }
//     alert(prime ? `${num} is prime number` : `${num} isn't prime number`);
// }

//5.Գրել կոդ, որ թույլ կտա ստանալ նկար 5-ի տեսքը:

















