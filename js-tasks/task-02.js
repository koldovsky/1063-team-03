//Task 1: convert string to an array 
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  var wordsArray = string.split(" ");
  return wordsArray;
}

//Task 2: convert dna to rna
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  const result = dna.replace(/T/g, "U");
  return result;
}  

//Task 3: min & max numbers from array
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//Task 4: smallest value or index
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  if (toReturn === 'value') {
    return Math.min(...arr);
  }
  if (toReturn === 'index') {
    return arr.indexOf(Math.min(...arr));
  }
}