//1.Ստեղծել կլաս , կանստրուկտորի միջոցով   տալ number հատկություն: Ստեղծել այդ կլասում մեթոդը, որը  կանչելիս  այդ թիվ հատկության արժեքից կհանի  այցելուի մուտքագրած  թիվը:2
//
// 2. Ստեղծել կլասս , որին կանստրուկտրով տալիս են  էլ. հասցե հատկությունը: Էլ. հասցեն  պետք է լրացվի set մեթոդներով՝ստուգելով արդյոք  տրվող արժեքը վերջանում է mail.ru,gmail.com, rambler.ru կամ yahoo.com-ով , նոր վերագրել այդ արժեքը: Ստեղծել get մեթոդ, որ թույլ կտա արտածել mail հատկության արժեք եթե կա արժեք կամ արտածի "No" :
//
// 3. Ստեղծել Person, Task և ToDoList կլասներ ։ Person-ը ունի id (չկրկնվող արժեք), name հատկությունները ։ Task ունի id (չկրկնվող արժեք), text , assigned, log, և status հատկությունները ։ text-ը պարդադիր պետք է փոխանցվի task ստեղծելուց։
// assigned-ը սկզբից դատարկ է , իսկ status-ը կարող է լինել միայն ['todo', 'in development', 'testing', 'done'] արժեքներից որևէ մեկը, սկզբից 'todo'է։ log-ում պահվում է ժամանակը և ստատուսը, որը վերագրվել է status հատկությանը։
// task ստեղծելուց հետո պետք է հնարավորթյուն ունենա assignToPerson մեթոդի միջոցով կցել կոնկրետ մարդու ․ assigned հատկությանը վերագրելով Person-ից ստեղծված օբեկտ,ունենա changeStatus մեթոդ որով կկարողանանք փոխել ստատուսը ։
// ToDoList-ը պետք է ունենա task-երի լիստ ու աշխատակիցների լիստ․ addEmployee մեթոդի միջոցով ավելացնել աշխատակից արդեն ստեղծված Person տեսակի օբեկտ փոխանցելով, addTask մեթոդի միջոցով ստեղծել task և ավելացնել task-երի լիստում, բայց չկցել ոչ մեկին։
// ToDoList-ը ունենա assignToEmployee մեթոդ որը ստանում է personId ու taskId պառամետրեր և այդ taskId-ով task-ը կցում է personId-ով ախատակցին ։ ունենա changeTaskStatus մեթոդ , որը ստանում է taskId և status պառամետր ու համապատասխան թասկի ստատուսը դնում է փոխանցված արժեքը։
// Ունենա filter մեթոդ , որը ստանում է name և status պառամետրեր, այնուհետև վերադարձնում է այն թասքերը , որոնց կցված անձի անունի մեջ պարունակվում է փոխանցված name , իսկ ստատուսը նույն է ինչ փոխանցվածը , status-ը դատարկ լինելու դեպքում դրան չի նայում ։
// Ունենա statistics մեթոդ , որը կվերադարձնի աշխատակիցների ցանկը ըստ հերթականությամբ , ով ավելի շատ թասկ ունի done ստատուսով։
//
// 3-րդ խնդիրը 60 միավոր է ։