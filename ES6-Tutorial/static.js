//Static Method
class Person{
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}
let anonymous = Person.createAnonymous("male");


class Employee extends Person{
    constructor(name, title) {
      super(name);
      this.title = title;
    }
  }
  
  let e1 = new Employee();
  
  console.log(e1 instanceof Employee); 
  console.log(e1 instanceof Person); 
  console.log(e1 instanceof Object); 


//Static private field

class Circle {
    #radius = 0;
    static #count = 0;
    constructor(radius) {
      this.radius = radius;
      Circle.#count++;
    }
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    set radius(value) {
      if (typeof value === 'number' && value > 0) {
        this.#radius = value;
      } else {
        throw 'The radius must be a positive number';
      }
    }
    get radius() {
      return this.#radius;
    }
    static hasRadius(circle) {
      return #radius in circle;
    }
    static getCount() {
      return Circle.#count;
    }
  }
  
  let circles = [new Circle(10), new Circle(20), new Circle(30)];
  
console.log(Circle.getCount());
  


//  Private static method example validate
class Person1 {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = Person1.#validate(firstName);
      this.#lastName = Person1.#validate(lastName);
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
    static #validate(name) {
      if (typeof name === 'string') {
        let str = name.trim();
        if (str.length === 3) {
          return str;
        }
      }
    //  throw 'The name must be a string with at least 3 characters';
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
  let person1 = new Person1('John', 'Doe');
console.log(person1.getFullName());
 