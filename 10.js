function asciiValue(string) {
  var i;
  var sum = 0;
  for (i = 0; i < string.length; i++) {
    sum += string[i].charCodeAt();
  }
  console.log(sum);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

