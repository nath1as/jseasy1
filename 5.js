// var num = Number(prompt('Please enter an integer greater than 0: '));
// var type = prompt('Enter "s" to compute the sum, or "p" to compute the product. ');

var num = 6;
var type = 'p';
var i;
var sum = 0;
var product = 1;


if (type === 's') {
  for (i = 1; i <= num; i++) {
   sum += i;
  } console.log('The sum of the integers between 1 and ' + num + ' is ' + sum);
} else if (type === 'p') {
  for (i = 1; i <= num; i++) {
   product *= i;
   } console.log('The product of the integers between 1 and ' + num + ' is ' + product);
   }

