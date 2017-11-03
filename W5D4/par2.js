function fizzBuzz(array) {
  let fizzBuzzArr = []

  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzArr.push(el);
    }
  });

  return fizzBuzzArr;
}

function printcb(el) {
  console.log(`${el}`);
}

function titleize(names, printcb) {
  let titles = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  return titles.forEach(printcb);
}

// function invocation

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

// object-oriented

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.grow = function() {
  this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

// closures
function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};