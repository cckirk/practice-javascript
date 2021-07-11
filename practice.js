// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
//function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 
// function printNumbersOneToOnehundred() {
//   var index = 1
//   while (index <= 100) {
//     console.log(index);
//     index += 1;
//   }
// }
// printNumbersOneToOnehundred()


// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// function printOddNumbers() {
//   var index = 1
//   while (index <= 100) {
//     console.log(index);
//     index += 2;
//   }
// }
// printOddNumbers()

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// function countFiftyFive(numbers) {
//   var i = 0;
//   numbers.forEach(function (number) {
//     if (number == 55) {
//       i += 1;
//     }
//   });
//   console.log(i);
// }
// countFiftyFive([55, 1, 55, 1, 55])

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
function printAwesomeSauce(strings) {
  var index = 0;
  var newStrings = [];
  while (index < strings.length) {
    //newStrings = strings[index];
    console.log(strings[index])
    newStrings.push(strings[index]);
    newStrings.push("awesomesauce")
    index++;
    //newStrings[index] = "awesomesauce";
  }
  console.log(newStrings)
}
printAwesomeSauce([1, 2, 3, 4])



// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}
item_amounts = { chair: 5, table: 2 };
item_amounts["chair"] = 3;
console.log(item_amounts);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}
item_amounts = { chair: 5, table: 2 };
item_amounts["desk"] = 7;
console.log(item_amounts);
// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(num, product) {
  var product = 1
  while (num > 0) {
    product *= num;
    num--;
  }
  console.log(product);
}
factorial(4);

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].


function everyOtherElement(array) {
  var new_array = [];
  var index = 0;
  console.log(index % 2);
  while (index < array.length) {
    if (index % 2 === 0) {
      new_array.push(array[index]);
    }
    index++;
  }
  return console.log(new_array);
}
everyOtherElement(["a", "b", "c", "d", "e"]);

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

function maxElement(array) {
  var max = 0;
  array.forEach(function (element) {
    if (element > max) {
      max = element;
    }
  });
  return console.log(max);
}
maxElement([5, 4, 8, 1, 2]);

// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(num) {
  var prod = 1;
  while (num > 0) {
    prod *= num;
    num--;
  }
  return console.log(prod);
}
factorial(5);

// Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// Write a function that takes in an array of numbers and returns its sum.

function getSum(array) {
  var index = 0;
  var sum = 0;
  while (index < array.length) {
    sum += array[index];
    index++;
  }
  return console.log(sum);
}
getSum([1, 3, 1, 5, 5]);

//Write a function that takes in an array of strings and returns the smallest string.

function smallestString(array) {
  var smallest = array[0].length;
  var word = array[0];
  array.forEach(function (element) {
    if (smallest > element.length) {
      smallest = element.length;
      word = element;
    }
  });
  return console.log(word);
}
smallestString(["string1", "biggerword", "string"])

//Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function (array) {
  var index
}