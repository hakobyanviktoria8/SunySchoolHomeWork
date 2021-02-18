//1.Ունենք զանգված կազմված բացասական, դրական թվերից և զրոյից:
// Գրել ծրագիր, որը կվերդասավորի մասիվը և կունենանք մեծից փոքր նվազող թվեր ունեցող  մասիվ:

// let arr = [1,2,3,4, 0, -1,-3,-4];
// const sort_arr = (arr) => arr.sort((a, b) => a > b ? 1 : -1);
// console.log(sort_arr(arr));

// 2.Ունենք IT անունով "WEB","C++", "Python","C#","Java"; զանգված դարձնել  string  միավորված այս նշանով    ՞ <=> ՞:
// Տեսքը՝  <<WEB<=>C++<=>Python<=>C#<=>Java>>

// let IT = ["WEB","C++", "Python","C#","Java"];
// console.log(IT.join("<=>"));

// 3.Գրել ծրագիր ,որը պատահական թվով երկարություն ունեցող մասիվից կընտրի որևէ անդամ պատահական սկզբունքով:

// const random_index_arr = (arr) => {
//     let idx = +(Math.random() * arr.length).toFixed();
//     console.log(arr , "index = " +  idx, arr[idx]);
//     return arr[idx]
// };
// console.log(random_index_arr([1,2,3,4, 0, -1,-3,-4]));

// 4.Գրել ծրագիեր, որը թույլ կտա այցելուին մուտքագրել 7 տարբեր աժեքներ, այդ արժեքներից ստանալ երկու մասիվ, որոնցից
// առաջինում կլինեն այն արժեքներ, որն թվեր են միաժանակ զույգ և դրական՝, մյուս  կլինի մուտգարված արժեքներից նրանք,
// որոնք սկսում են մեծատառ կամ փոքրատառ ՞՞h՞՞ տառով:

// const num_7 = () => {
//     let num, arr = [], arr_even = [], arr_odd_h = [] ;
//     for (let i = 0; i < 7; i++){
//         num = prompt("Please write number or \"h\" string");
//         arr.push(num);
//     }
//     console.log(arr);
//     // const sort_arr = arr.map(x => x > 0  && x % 2 === 0 ? arr_even.push(x) : arr_odd_h.push(x));
//     const sort_arr = arr.map(x => x > 0  && x % 2 === 0 ? arr_even.push(x)
//         : x.toString().startsWith("h") || x.toString().startsWith("H") ? arr_odd_h.push(x) : "");
//     return [arr_even, arr_odd_h];
// };
//
// console.log(num_7());


// 5.Ստանալ 1-100 տիրույթում  պատահական 20 թվերից կազմված array : Բոլոր արժեքները հանել 1, հետո զտել բոլոր զույգ թվերը,
// այնուհետև ստուգել կա 0, 10, 20,30 կամ 40 արժեք ունեցող անդամ: Օգտագործել array-ի հետ կապված մեթեդները:

const func = () => {
  let arr = [], num, arr_even = [];
  for (let i = 0; i < 20; i++){
    num = +(Math.random() * i).toFixed();
    arr.push(num);
  }
  console.log(arr);

  const arr_1 =  arr.map(x => x-1);
  console.log(arr_1);

  arr_1.map(x => x % 2 === 0 ? arr_even.push(x) : "");
  console.log(arr_even);

  let include_num = arr_even.map(x => x < 50 && x % 10 === 0);
  return [...new Set(include_num)].length === 2 ? "Include" : "Don't include"
};
console.log(func());















