 //apply, call, and bind
let cat = { type: 'Cat', sound: 'Meow' };
let dog = { type: 'Dog', sound: 'Woof' };

const say1 = function (message) {
  console.log(message);
  console.log(this.type + ' says ' + this.sound);
};

say1.apply(cat, ['What does a cat sound?']);
say1.apply(dog, ['What does a dog sound?']);
