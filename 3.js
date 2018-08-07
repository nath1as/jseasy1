var length = 10;
var width = 7;
// length = Number(prompt('Enter the length of the room in meters: '));
// width = Number(prompt('Enter the width of the room in meters: '));
var meterArea = Number(length) * Number(width);
var feetArea = meterArea * 10.7639;

console.log("The aea of the room is " + meterArea +" square meters (" + feetArea + " square feet).");
