// We are going to write a simple function that asks a user if they'd like tea 
// and biscuits. Chronologically, your function should:

// 1. Ask the user if they'd like tea.
// 2. console.log their response.
// 3. Ask the user if they'd like biscuits.
// 4. console.log their complete response: So you ${firstAns } want tea and 
  // you ${secondAns } want coffee.
// 5. Close the reader.

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function likeTea() {
  let first, second;

  reader.question('Would you like tea?', function (res) {
    first = res;
    console.log(`So that's a "${res}" on the tea? Cool...`);

    if (first === 'yes') {
      reader.question('Would you like biscuits with your tea?', function (res) {
        second = res;
        console.log(`${second}, huh? Okay...`);
        const firstRes = (first === 'yes') ? 'do' : 'do not';
        const secondRes = (second === 'yes') ? 'do' : 'do not';
        console.log(`So to recap, you ${firstRes} want tea, and ${secondRes} want biscuits with them...`);
        reader.close();
      })
    }else{
        console.log(`So to recap, you don't want tea...`);
        reader.close();
    }
  });
  
};

likeTea()