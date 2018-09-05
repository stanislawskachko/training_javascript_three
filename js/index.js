let product = {};                   //empty object
product.name = 'Ferrari LaFerrari'; // property-data
product.price = 300000;             // property-data

let student = {};
student.name = 'Jon';
student.scholarship = 100;

function sayMyName() {              //function - неявна змінна
    console.log(this.name);         //this - неявна змінн
}

product.say = sayMyName;            // приєднання функції до об*єкту
student.say = sayMyName;            // приєднання функції до об*єкту

product.say();                      // запуск функції із класом
student.say();                      // запуск функції із класом


product.showPrice = function () {
    console.log(this.name + ':  ' + this.price);
}
product.showPrice();

let lambo = {
    name: 'Lamborghini Diablo',
    price: 500000,
    say: sayMyName,
    showPrice() {
        console.log(this.name + ':  ' + this.price);
    }
}


lambo.say();
lambo.showPrice();

let students = new Map();
students.set('Ivan', 'Ivanov Ivan');
students.set('Petro', 'Vasylenko Petro');
console.log(students.get('Ivan'));

let studentsDict = {
    Ivan: 'Ivanov Ivan',
    Petro: 'Vasylenko Petro'
}

console.log(studentsDict['Ivan']); // studentsObj.Ivan

function Car(name, price) { //функція з великої - це функція конструктор
    this.name = name;
    this.price = price;
    this.say = sayMyName;
    return this;            //краще не писати
}

let chevy = new Car('Chevrolet Corvette', 50000); // new- дуже важливо писати - створює новий обэкт
let mustang = new Car('Ford Mustang', 45000);

function animal(obj){
  return 'This ' + obj.color + " " + obj.name +' has ' + obj.legs + ' legs' + '.';
}



class SuperCar {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    say() {
        console.log(this.name, this.price);
    }
}



let teslaRoadster = new SuperCar('Tesla Roadster', 250000);
teslaRoadster.say();

let teslaRoadsterExclusive = Object.create(teslaRoadster);
teslaRoadsterExclusive.price = 300000;
teslaRoadsterExclusive.say();

const teslaString = JSON.stringify(teslaRoadster);
console.log(teslaString);

const teslaExclusiveString = JSON.stringify(teslaRoadsterExclusive);
console.log(teslaExclusiveString);


