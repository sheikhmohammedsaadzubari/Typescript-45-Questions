"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Step 01 • Tests for equality and inequality with strings:
let string01 = "Hello";
let string02 = "hello";
console.log(string01 === string02); // false
console.log(string01 !== string02); // true
console.log(string01 == string02); // true
console.log(string01 != string02); // false
//Step 02 • Tests using the lower case function:
let text01 = "Hello World";
let text02 = "hello world";
console.log(text01.toLowerCase() === text02); // true
//Step 03 • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
let number01 = 2;
let number02 = 4;
console.log(number01 === number02); // false
console.log(number01 !== number02); // true
console.log(number01 > number02); // false
console.log(number01 < number02); // true
//Step 04 • Tests using "and" and "or" operators:
let const01 = 3;
let const02 = 6;
let const03 = 9;
console.log(const01 < const02 && const02 < const03);
//true, both conditions are true.
console.log(const01 < const02 && const02 > const03);
//false, one condition is false and another is true.
console.log(const01 > const02 && const02 > const03);
//false both conditions are false.
console.log(const01 < const02 || const02 < const03);
//true, both conditions are true.
console.log(const01 < const02 || const02 > const03);
//true, one condition is true and another is false.
console.log(const01 > const02 || const02 > const03);
//false both conditions are false.
//Step 05 • Test whether an item is in a array:
let array01 = [
    'Saad',
    'Maaz',
    'Anus',
    'Umer',
    'Abdul Rehman',
    'Saleem',
    'Saba',
    'Saher',
    'Ayesha',
    'Momina'
];
console.log(array01.includes('Saad')); //true
console.log(array01.includes('Kamran')); //false
//Step 06 // • Test whether an item is not in a array:
let array02 = [
    14,
    16,
    8,
    2,
    1,
    48,
    40,
    19,
    11,
    4
];
console.log(!array02.includes(14)); //false
console.log(!array02.includes(51)); //true
