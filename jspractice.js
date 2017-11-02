

let callback = function() {
  console.log("It has been 5 seconds...");
};

let timeToWait = 5000;

global.setTimeout(callback, timeToWait);

global.setTimeout(function() {
  console.log("It has been 5 seconds again...");
}, 5000);

global.setTimeout(() => {
  console.log("It has been 5 seconds again again...");
}, 5000);

