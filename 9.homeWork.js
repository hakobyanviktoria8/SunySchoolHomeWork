//1.Ստեղծել կլաս , կանստրուկտորի միջոցով   տալ number հատկություն:
// Ստեղծել այդ կլասում մեթոդը, որը  կանչելիս  այդ թիվ հատկության արժեքից
// կհանի  այցելուի մուտքագրած թիվը:2
//
// const num = prompt("Please write number");
//
// class Subtraction {
//
//     constructor(number) {
//         this.number = number;
//     }
//
//     sub() {
//         return this.number - num
//     }
// }
//
// const subtraction = new Subtraction(76);
// console.log(subtraction.sub());

// 2. Ստեղծել կլասս , որին կանստրուկտրով տալիս են  էլ. հասցե հատկությունը:
// Էլ. հասցեն  պետք է լրացվի set մեթոդներով՝ստուգելով արդյոք  տրվող արժեքը
// վերջանում է mail.ru,gmail.com, rambler.ru կամ yahoo.com-ով , նոր վերագրել
// այդ արժեքը: Ստեղծել get մեթոդ, որ թույլ կտա արտածել mail հատկության արժեք
// եթե կա արժեք կամ արտածի "No" :
//


// class EmailChack {
//     constructor(email) {
//         this.email = email
//     }
//
//     set email(str) {
//         let arr = ["mail.ru", 'gmail.com', 'rambler.ru', 'yahoo.com'];
//         let bool = arr.some(x => str.endsWith(x));
//         if (bool) this._email = str;
//     }
//
//     get email() {
//         return this._email || "No"
//     }
// }
//
// const emailCheck1 = new EmailChack("lol@ma.ru");
// const emailCheck2 = new EmailChack("lol@mail.ru");
//
// console.log(emailCheck1.email);
// console.log(emailCheck2.email);


// 3. Ստեղծել Person, Task և ToDoList կլասներ ։
// Person-ը ունի id (չկրկնվող արժեք), name հատկությունները ։
// Task ունի id (չկրկնվող արժեք), text , assigned, log, և status հատկությունները ։
// text-ը պարդադիր պետք է փոխանցվի task ստեղծելուց։
// assigned-ը սկզբից դատարկ է , իսկ status-ը կարող է լինել միայն

// task ստեղծելուց հետո պետք է հնարավորթյուն ունենա assignToPerson մեթոդի
// միջոցով կցել կոնկրետ մարդու ․ assigned հատկությանը վերագրելով Person-ից
// ստեղծված օբեկտ,ունենա changeStatus մեթոդ որով կկարողանանք փոխել ստատուսը ։
// ToDoList-ը պետք է ունենա task-երի լիստ ու աշխատակիցների լիստ․
// addEmployee մեթոդի միջոցով ավելացնել աշխատակից արդեն ստեղծված Person տեսակի
// օբեկտ փոխանցելով, addTask մեթոդի միջոցով ստեղծել task և ավելացնել task-երի
// լիստում, բայց չկցել ոչ մեկին։ ToDoList-ը ունենա assignToEmployee մեթոդ
// որը ստանում է personId ու taskId պառամետրեր և այդ taskId-ով task-ը կցում է
// personId-ով ախատակցին ։ ունենա changeTaskStatus մեթոդ , որը ստանում է taskId
// և status պառամետր ու համապատասխան թասկի ստատուսը դնում է փոխանցված արժեքը։
// Ունենա filter մեթոդ , որը ստանում է name և status պառամետրեր, այնուհետև
// վերադարձնում է այն թասքերը , որոնց կցված անձի անունի մեջ պարունակվում է
// փոխանցված name , իսկ ստատուսը նույն է ինչ փոխանցվածը , status-ը դատարկ
// լինելու դեպքում դրան չի նայում ։ Ունենա statistics մեթոդ , որը կվերադարձնի
// աշխատակիցների ցանկը ըստ հերթականությամբ , ով ավելի շատ թասկ ունի done
// ստատուսով։
//
// 3-րդ խնդիրը 60 միավոր է ։

class Person {
    constructor(id, name) {
        this.id = id; //+new Date()
        this.name = name;
    }
}

class Task {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.log = [];
        this.status = 'todo';
        this.assigned = null;
    }

    set status(val) {
        if (['todo', 'in development', 'testing', 'done'].includes(val)) {
            this._status = val;
            this.log.push({
                date: new Date(),
                status: val
            });
        }
    }

    get status() {
        return this._status
    }

    assignToPerson(person) {
        this.assigned = person
    }

    changeStatus(status) {
        this.status = status
    }

}

class ToDoList {
    constructor() {
        this.taskList = [];
        this.employList = [];
    }

    addEmployee(person) {
        this.employList.push(person)
    }

    addTask(id, text) {
        this.taskList.push(new Task(id, text))
    }

    assignToEmployee(personId, taskId) {
        let task = this.taskList.find(x => x.id === taskId);
        let person = this.employList.find(x => x.id === personId);
        if (task && person) {
            task.assignToPerson(person)
        }
    }

    changeTaskStatus(taskId, status) {
        let task = this.taskList.find(x => x.id === taskId);
        task.changeStatus(status)
    }

    filter(name, status) {
        return this.taskList.filter(x => {
            if (x.assigned && x.assigned.name.indexOf(name) > -1) {
                if (status && x.status !== status) {
                    return false
                }
                return true
            }
        });
    }

    statistics() {
        let person = new Map();
        this.taskList.filter(x => x.status === "done").forEach(x => {
            if (person.has(x.assigned)) {
                person.set(x.assigned, person.get(x.assigned) + 1)
            } else {
                person.set(x.assigned, 1)
            }
        });
        return [...new Map([...person.entries()].sort((a, b) => b[1] - a[1])).keys()].map(x => x.name)
    }
}

const p1 = new Person(1, "Person1");
const p2 = new Person(2, "Person2");
const p3 = new Person(3, "Person3");
const p4 = new Person(4, "Person4");
const p5 = new Person(5, "Person5");

console.log(p1);
const task = new Task(1, "tasssk1");
console.log(task);
const toDoList = new ToDoList();
console.log(toDoList);
toDoList.addTask(0, 'task0');
toDoList.addTask(1, 'task1');
toDoList.addTask(2, 'task2');
toDoList.addTask(3, 'task3');
toDoList.addTask(4, 'task4');
console.log(toDoList);

toDoList.addEmployee(p1);
toDoList.addEmployee(p2);
toDoList.addEmployee(p3);
toDoList.addEmployee(p4);
toDoList.addEmployee(p5);
console.log(toDoList);

toDoList.assignToEmployee(1, 0);
toDoList.assignToEmployee(1, 1);
toDoList.assignToEmployee(1, 2);
toDoList.assignToEmployee(3, 2);
toDoList.assignToEmployee(2, 2);
console.log("assignToEmployee", toDoList);

toDoList.changeTaskStatus(0, "dane");
toDoList.changeTaskStatus(1, "dane");
toDoList.changeTaskStatus(2, "dane");
toDoList.changeTaskStatus(3, "dane");
toDoList.changeTaskStatus(4, "dane");
console.log(toDoList);
toDoList.filter("Person1", "done");
console.log(toDoList.filter("Person1", "todo"));

console.log(toDoList.statistics());


/*class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Task {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.log = [];
        this.status = 'todo';
        this.assigned = null;
    }

    set status(value) {
        if (['todo', 'in development', 'testing', 'done'].includes(value)) {
            this._status = value;
            this.log.push({
                date: new Date(),
                status: value
            });
        }
    }

    get status() {
        return this._status;
    }

    assignToPerson(person) {
        this.assigned = person;
    }

    changeStatus(status) {
        this.status = status;
    }
}

class ToDoList {
    constructor() {
        this.taskList = [];
        this.employee = [];
    }

    addEmployee(person) {
        this.employee.push(person);
    }

    addTask(id, text) {
        this.taskList.push(new Task(id, text));
    }

    assignToEmployee(personId, taskId) {
        const task = this.taskList.find(task => task.id === taskId);
        const person = this.employee.find(person => person.id === personId);
        if (task && person) {
            task.assignToPerson(person);
        }
    }

    changeTaskStatus(taskId, status) {
        const task = this.taskList.find(task => task.id === taskId);
        task.changeStatus(status);
    }

    filter(name, status) {
        return this.taskList.filter(task => {
            if (task.assigned && task.assigned.name.indexOf(name) > -1) {
                if (status && task.status !== status) {
                    return false;
                }
                return true;
            }
        });
    }

    statistics() {
        const persons = new Map();
        this.taskList.filter(task => task.status === 'done').forEach(task => {
            if (persons.has(task.assigned)) {
                persons.set(task.assigned, persons.get(task.assigned) + 1);
            } else {
                persons.set(task.assigned, 1);
            }
        });
        return [...new Map([...persons.entries()].sort((a, b) => b[1] - a[1])).keys()].map(person => person.name);
    }
}

const person1 = new Person(1, 'Person 1');
const person2 = new Person(2, 'Person 2');
const person3 = new Person(3, 'Person 3');
const person4 = new Person(4, 'Person 4');
const person5 = new Person(5, 'Person 5');
console.log(person1);

const todoList = new ToDoList();
todoList.addTask(0, 'teststsattsya');
todoList.addTask(1, 'teststsattsya');
todoList.addTask(2, 'teststsattsya');
todoList.addTask(3, 'teststsattsya');
todoList.addTask(4, 'teststsattsya');

console.log(todoList);
todoList.addEmployee(person1);
todoList.addEmployee(person2);
todoList.addEmployee(person3);
todoList.addEmployee(person4);
todoList.addEmployee(person5);
console.log(todoList);

todoList.assignToEmployee(1, 0);
todoList.assignToEmployee(1, 1);
todoList.assignToEmployee(1, 3);
todoList.assignToEmployee(2, 2);
todoList.assignToEmployee(3, 4);
console.log("assignToEmployee", todoList);

todoList.changeTaskStatus(0, 'done');
todoList.changeTaskStatus(1, 'done');
todoList.changeTaskStatus(2, 'done');
todoList.changeTaskStatus(3, 'done');
todoList.changeTaskStatus(4, 'done');
console.log("changeTaskStatus",todoList);

console.log(todoList.statistics());*/