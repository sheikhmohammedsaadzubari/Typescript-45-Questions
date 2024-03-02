// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

//Step01 >> Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzas : Array<string> = [
    'Margherita',
    'Marinara',
    'Pepperoni',
    'BBQ Chicken',
    'Maltese'
];

console.log('My favorite pizzas are:\n')
for(let i = 0 ; i < pizzas.length ; i++){
    console.log(pizzas[i])
}

//Step02 >>  Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

console.log('\nI like these pizzas:\n')
for(let i = 0 ; i < pizzas.length ; i++){
    console.log(`I like ${pizzas[i]} pizza.`)
}

//Step03 >> Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

console.log("\nEvery saturday and sunday I alongwith my family go to Pizza Max which is nearer from my home.")

console.log('\nI really love pizzas!')