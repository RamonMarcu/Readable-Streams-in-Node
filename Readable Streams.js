// app.js

const readline = require('readline');
const fs = require('fs');

let settings = {
  input: fs.createReadStream('shoppingList.txt') 
};

const myInterface = readline.createInterface(settings);

const printData = (data) => {
  console.log(`Item: ${data}`);
};

myInterface.on('line', printData);

//bash

$ node app.js
Item: apples
Item: pears
Item: royal jelly
Item: bread
Item: milk
Item: tofu
Item: beans
Item: flan
Item: pork
Item: tamarind
$ 