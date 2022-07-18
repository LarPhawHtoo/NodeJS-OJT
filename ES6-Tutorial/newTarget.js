// new.target in constructors

class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends Person{
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let john = new Person('John Doe'); 
let lily = new Employee('Lily Bush', 'Programmer'); 
