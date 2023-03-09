// // For loop practice exercise
// for (var i = 1; i <= 10; i++) {
//   if (i == 1) {
//     console.log("Gold medal");
//   } else if (i == 2) {
//     console.log("Silver medal");
//   } else if (i == 3) {
//     console.log("Bronze medal");
//   } else {
//     //this block will run if no condition matches
//     console.log(i);
//   }
// }

// for (var i = 1; i <= 10; i++) {
//   switch (i) {
//     case 1:
//       console.log("Gold medal");
//       break;
//     case 2:
//       console.log("Silver medal");
//       break;
//     case 3:
//       console.log("Bronze medal");
//       break;
//     default:
//       //this block will run if no condition matches
//       console.log(i);
//   }
// }

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;

  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(message, style);
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
celebrateStyler("birthday");

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

// Call styleAndCelebrate
styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");
``;

// OOP Project
// Task 1: Code a Person class
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code an intern object, run methods
function intern() {
  const intern1 = new Worker(
    (name = "Bob"),
    (age = 21),
    (energy = 110),
    (xp = 0),
    (hourlyWage = 10)
  );
  intern1.goToWork();
  return intern1;
}

// Task 4: Code a manager object, methods
function manager() {
  const manager1 = new Worker(
    (name = "Alice"),
    (age = 30),
    (energy = 120),
    (xp = 100),
    (hourlyWage = 30)
  );
  manager1.doSomethingFun();
  return manager1;
}

// Array and Object Iteration
// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (let dai of dairy) {
    console.log(dai);
  }
}

logDairy();
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (const property of Object.keys(bird)) {
    console.log(`${property}: ${bird[property]}`);
  }
}
birdCan();
// Task 3
function animalCan() {
  for (const property in bird) {
    console.log(`${property}: ${bird[property]}`);
  }
}
animalCan();

// Little Lemon Receipt Maker
// Given variables
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (let i = 0; i < dishData.length; i++) {
    let finalPrice;
    if (taxBoolean === true) {
      finalPrice = dishData[i].price * tax;
    } else if (taxBoolean === false) {
      finalPrice = dishData[i].price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log("Dish: " + dishData[i].name + " " + "Price: $" + finalPrice);
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);
  if (typeof guests === "number" && guests > 0 && guests < 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
