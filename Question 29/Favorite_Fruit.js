"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//Create an array of my favorite fruits:
let favorite_fruits = [
    'Bananas',
    'Mangoes',
    'Apples'
];
//Independent if statements to check for certain fruits in my array:
if (favorite_fruits.includes('Apples')) {
    console.log("I really like Apples!");
}
if (favorite_fruits.includes('Mangoes')) {
    console.log("I really like Mangoes!");
}
if (favorite_fruits.includes('Bananas')) {
    console.log("I really like Bananas!");
}
if (favorite_fruits.includes('Oranges')) {
    console.log("I really like Oranges!");
}
if (favorite_fruits.includes('Grapes')) {
    console.log("I really like Grapes!");
}
