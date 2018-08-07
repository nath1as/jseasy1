// bill = Number(prompt('What is the bill? '));
// tipPercent = Number(prompt('What is the tip percentage? '));

var bill = 200;
var tipPercent = 15;
var tip = bill * tipPercent / 100;
var total = bill + tip;

console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));
