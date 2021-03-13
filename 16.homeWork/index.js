const randomFunc = require("./homework2");


//1. Ստեղծել homework1.js ֆայլ որը աշխատեցնելուց հետո __filename գլոբալի  միջոցով console-ում արտածել
// ֆայլի բացարձակ ճանապարը և  ճանապարհի անվան երկարությունը
//
console.log("Sunny School");
console.log(__filename);
console.log(__dirname);

// 2. Ստեղծել package.json  ֆայլ որը կունենա  home2.jpg տեսքը, որտեղ author դիմաց
// կլինի Ձեր անուն ազգանունը: homework2.js ֆայլի միջոցով օգտագործելով random փաթեթը
//  console-ում արտածել 5 պատհական int արժեքներ 0 - 100 միջակայքում:
//
console.log(randomFunc());

// 3. Modules պապակայում ստեղծել currentTime մոդուլ currentTime ֆունկցիայով
// որը արտածում է  կանչելու պահին ժամը, րոպեն ,վարկյանը և միլիվայրկյանը :
// Մոդուլը ներմուծել homework3.js ֆայլում և կանչել currentTime ֆունկցիավ  ու
// արդյունքը արտածել console-ում:
//

//see homework3 file

// 4.Modules պապակայում ստեղծել wordsFromString մոդուլ wordsFromString ֆունկցիայով
// որը տրված նախադասությունից console-ում  արտածում է այն բառերը որոնք չունեն հատուկ սիմվոլ:
// Մոդուլը ներմուծել homework4.js ֆայլում և wordsFromString ֆունկցիավ կանչել որևէ նախադասության համար:
//
//
//see homework4 file

// 5.Modules պապակայում ստեղծել charOneSecondOutput մոդուլ charOneSecondOutput ֆունկցիայով
// որը console-ում  արտածում է ֆունկցիային տրված բառի տառերը 1 վայրկյան պարբերությամբ:
// Մոդուլը ներմուծել homework5.js ֆայլում և charOneSecondOutput ֆունկցիա կանչել Ձեր անուն ազգանունից
// կազմված բառակապակցության համար :