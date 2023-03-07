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
