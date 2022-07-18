let num1 = 071;
console.log(num1);

let num2 = 0x1a;
console.log(num2);

//Javascript float
let price = 9.99;
console.log(price);

let amount = 3.14e7;
console.log(amount);

//Javascript Separator
let expense = 123_450;
console.log(expense);
let fee = 12345_00; 
console.log(fee);

//Javascript Boolean
var error = 'An error occurred';
let hasError = Boolean(error);
console.log(hasError);

if (error) {
  console.log(error);
}

// Javascript String 
let name = 'John';
let message = `Hi, I'm ${name}.`;
console.log(message);
console.log(message.length);

//Javascript Object
let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    position:'Senior',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.age);
console.log(contact['phone']);
console.log(contact['email']);
contact.age=25;
console.log(contact.age);
delete contact.age;
console.log(contact.age);
console.log('position' in contact);

//Javascript Array
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); 
console.log(mountains[1]); 
console.log(mountains[2]);
mountains[2] = 'K2';

console.log(mountains);
console.log(mountains.length);

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');

console.log(seas); 
const lastElement = seas.pop();
console.log(lastElement); 
seas.unshift('Red Sea');
console.log(seas);
let index = seas.indexOf('North Sea');

console.log(index);
console.log(Array.isArray(seas));

//Javascript Arithmetic Operators

let sum = 10 + 20;
console.log(sum);

let x = '10',
    y = '20';
let result1 = x + y;

console.log(result1);
let result2 = 2 * 3;
console.log(result2);
let result3 = '20' / 2;
console.log(result3);

let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
console.log(currentEnergy);
  
//Remainder vs Modulo operator

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividen and divisor have the same sign
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

// dividen and divisor have the different signs
console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1

//Assign Operator
let a = 10, b = 20, c = 30;

b = c; 
a = b;
console.log('B is ' + b);
console.log('A is ' + a);

// Unary Operators
let age = 25;
++age;

console.log('Age is ' + age);

let weight = 90;
weight = --weight + 5;

console.log( 'Weigth : ' +weight);

//Comparasion 
let f1 = 'apple',
    f2 = 'Banana';

let result = f2.toLowerCase() < f1.toLowerCase();
console.log('Comparasion result :' + result);


//Logical Operator
let eligible = false,
    required = true;
console.log('Logical Result : ' + (eligible && required));
console.log('Logical Result : ' + (eligible || required));

let user = {
    username: 'Satoshi'
};
user.nickname ??= 'anonymous';

console.log(user);

const name1 = null ?? 'John';
console.log('Name : ' + name1);

let result4 = undefined ?? console.log('Hi');

const result5 = (null || undefined) ?? 'OK';
console.log('Result : ' + result5);

// exponentiation operator
let result6 = Math.pow(2,2);
console.log('Exponentiation Result : ' + result6);
result = 2 ** 3;
console.log('Exponentiation Result : ' + result);

//If Condition
let age1 = 18;
if (age1 >= 18) {
  console.log('You can sign up');
}

let age2 = 15;

if (age2 >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}

let month = 7;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);

//Ternary Operator
let age3 = 18;
let message2;

age3 >= 16 ? (message2 = 'You can drive.') : (message2 = 'You cannot drive.');

console.log(message2);

//object spread Operator
let rgb = [ 'red', 'green', 'blue' ];
let cmyk = ['cyan', 'magenta', 'yellow', 'black'];
let merge = [...rgb, ...cmyk];
console.log(merge);

//Target object with Setter

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        this.radius = value / 2;
        console.log('SET ', value);
    }
    get diameter() {
        return this.radius * 2;
    }
}

let circle = new Circle(100);

let cloneCircle1 = Object.assign(circle, {
    diameter: 200
});

let cloneCircle2 = {
    ...circle
};

//Switch Statement

let day = 4;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); 

//While Loop
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}

//Queue with object
class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }
  
  let q = new Queue();
  for (let i = 1; i <= 7; i++) {
    q.enqueue(i);
  }
  // get the current item at the front of the queue
  console.log(q.peek());
  
  // get the current length of queue
  console.log(q.length);
  
  // dequeue all elements
  while (!q.isEmpty) {
    console.log(q.dequeue());
  }

//  do-while loop
let count1 = 0;
do {
  console.log(count1);
  count1++;
} while (count1 < 5)

//for loop
for (var i = 0; i < 5; i++){
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (var i = 0; i < 5; i++) {
    (
        function (j) {
            setTimeout(function () {
                console.log(j);
            }, 1000);
        }
    )(i);
}
// for loop and Break
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
      break;
    }
}
  
//break statement to terminate a nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j == 4) {
        break;
      }
      console.log(i, j);
    }
  }
//Continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log('Continue Result : ' +i);
}  
  
//Comma Operator
let x1 = 10;
let y1 = (x1++, x1 + 1);

console.log('Comma Result : ' + x1, y1);

//Function
function say(message) {
    console.log(message);
}

let result7 = say('Hello');
console.log('Result:', result7);

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log('Add Function Result : ' + add(1, 2));
console.log('Add Function Result : ' + add(1, 2, 3, 4, 5));

function showMe(){
    console.log('a hoisting example');
}

showMe();

//Passing a function to another function
function add(a, b) {
    return a + b;
}

let sum1 = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result8 = average(10, 20, sum1);

console.log(result8);

//Compare by

function compareBy(propertyName) {
    return function (a, b) {
      let x = a[propertyName],
        y = b[propertyName];
  
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    };
  }
  let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 },
  ];
  
  // sort products by name
  console.log('Products sorted by name:');
  products.sort(compareBy('name'));
  
  console.table(products);
  
  // sort products by price
  console.log('Products sorted by price:');
  products.sort(compareBy('price'));
console.table(products);

//anonymous functions
  
let show = function() {
    console.log('Anonymous function');
};

show();

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

//anonymous arrow functions
let show1 = () => console.log('Anonymous function');

//Pass by value
let person1 = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  }
  
  increaseAge(person1);
  
console.log(person1);
  
//Recursive Function
function countDown(fromNumber) {
    console.log('Recursive : '+fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);

//Object Method
let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log('Full Name : ' + person2.getFullName());


//constructor function
function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person3 = Person("John", "Doe");

console.log('First Name : ' + person3.firstName);
console.log('Last Name : ' + person3.lastName);
console.log(Person);
console.log(Person.prototype);

//Constructor & Prototype
class Person1 {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p1 = new Person1('John', 'Doe');
let p2 = new Person1('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());

let teacher = Object.create(person);
teacher.name = 'Jane Doe';
teacher.teach = function (subject) {
        return "I can teach " + subject;
}
console.log(Object.getPrototypeOf(teacher) === person);

//this method
let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log('This car brand : ' + car.getBrand());

let car1 = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

let bike = {
    brand: 'Harley Davidson'
}

let brand = car1.getBrand.bind(bike);
console.log(brand());

//Indirect Invocation
function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");

//Multiple properties object define properties
var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');

//Property Descriptor

let person4 = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(person4, 'firstName');

console.log(descriptor);


//for in loop
var person5 = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for(var prop in person5) {
    console.log(prop + ':' + person5[prop]);
}

//for...in loop & inheritance
var decoration = {
    color: 'red'
};

var circle1 = Object.create(decoration);
circle1.radius = 10;


for(const prop in circle1) {
    console.log(prop);
}

//for...in loop and Array
const items = [10 , 20, 30];
let total = 0;

for(const item in items) {
    total += items[item];
}
console.log(total); 

Array.prototype.foo = 100;
for(var prop in items) {
    total += items[prop];
}
console.log(total); 

var arr = [];
// set the third element to 3, other elements are `undefined`
arr[2] = 3; 

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}
//Object value()
const person6 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const profile = Object.values(person6);

console.log(profile);

//Object entires()
const ssn = Symbol('ssn');
const person7 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv = Object.entries(person7);

console.log(kv);

//Object Assign
let box = {
    height: 10,
    width: 20,
    color: 'Red'
};

let style = {
    color: 'Blue',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

//Object is() not use
let amount1 = +0,
    volume1 = -0;
console.log(volume1 === amount1);

// Object.is()
let amount2 = +0,
    volume2 = -0;
console.log(Object.is(amount2, volume2)); 

//Factory Function
function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return firstName + ' ' + lastName;
      },
    };
  }
  
  let person8= createPerson('John', 'Doe');
  let person9 = createPerson('Jane', 'Doe');
  
  console.log(person8.getFullName());
console.log(person9.getFullName());

//Destructuring function arguments

let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person10 = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person10);

//concise method syntax
let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

server['starting up']();

//JavaScript getters and setters
class Person2 {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person11 = new Person2('Jane Doe');
console.log(person11); 

person11.setName('Jane Smith');
console.log(person11.getName()); 

//Using getter in an object literal
let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);

//Implementing JavaScript inheritance using extends and super
function Animal(legs) {
    this.legs = legs;
}

Animal.prototype.walk = function() {
    console.log('walking on ' + this.legs + ' legs');
}

function Bird(legs) {
    Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;


Bird.prototype.fly = function() {
    console.log('flying');
}

var pigeon = new Bird(2);
pigeon.walk();
pigeon.fly();

//extend and super()
class Animal1 {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird1 extends Animal1 {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird1 = new Bird(2);

bird1.walk();
bird1.fly();




  