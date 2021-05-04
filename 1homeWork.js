// 1.Գրել կոդ, որը  console  պատուհանում տպի Ձեր Անուն Ազգանունը և Alert անի My First Homework արտահայտությունը:

// console.log("My name is Viktorya Hakobyan.");
// alert("My first homework in Suny School.");

//2.Գրել կոդ որը աշխատացնելուց հետո  երեք անգամ բացում է prompt պատուհանը և այցելուն այդ պատհուններից առաջինում գրում է անունը,
// երկրորդում տարիքը,  իսկ երրորդում իր քաղաքը, որից հետո alert  է լինում հետևյալ արտահայտությունը՝
// My name is ՙՙմուտքագրված անունը՚՚ i am ՙՙմուտքագրված տարիքը՚՚ old. I am from ՙՙմուտքագրված քաղաքը՚՚

// let name = prompt("What's your name?");
// let age = prompt("How old are you?");
// let country = prompt("Where are you from?");
// alert(`My name is ${name}. I'm ${age} old. I'm from ${country}.`);

//3.Գրել կոդ , որը կստուգի prompt-ով տրված թիվը 8-20 միջակայքում  է, թե ոչ:
// Console-ում  տպի true եթե ճիշտ է և false եթե սխալ է:

let number = prompt("Plese write 8-20 number.");
// console.log(number > 8 && number < 20);

if (!isNaN(number) && number > 8 && number < 20){
    console.log(true);
}
console.log(false);

//4.console.log(undefined || 0 || null || true && "0" && " " && 5 || 9)
// Կոդը տեղադրել script-ում և գրել մեկնաբանություններ այս  գործողությունների արդյունքի մասին   և ինչու է այդպես:

// console.log(undefined || 0); //0 when false || false return last false
// console.log(undefined || 0 || null || true); //true when false || true return true
// console.log(undefined || 0 || null || true && "0" && " "); //" " when true || true return last true
// console.log(undefined || 0 || null || true && "0" && " " && 5 || 9); //5 when true || true return first true

// && 1ina anum

//5.Ներքոնշյալ կոդը տեղադրել script-ում և գրել մեկնաբանություններ այս  գործողությունների արդյունքները  ըստ տողերի և ինչու է այդպես

// console.log("" + 1 + 0); //"10" Change Number type to String, then add
// console.log(true + false); //1  true = 1; false = 0
// console.log("2" * "3"); //6 change String type to Namber,then multiplay
// console.log("$" + 4 + 5); //"$45" Change Number type to String, then add
// console.log("4px" - 2); //NaN  հանման ժամանակ կարողանում է փոխակերպել միայն թվի տիպը, տողից թիվ չենք կարող հանել
// console.log(null + 1); // 1 null = 0
// console.log(undefined + 1); // NaN undefined is nothing
// console.log("apple" > "pineapple"); //false compares ascii codes 97 > 112
// console.log("2" > "12"); //true compares string ASCII codes 50 > 49


//Alt & number
// ☺
// ♥
// ♣
// •
// A
// ↓
// $
// ♫
// .