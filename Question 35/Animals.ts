// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


//Step01 >> Store the names of animals in a list, and then use a for loop to print out the name of each animal:

let animals : Array<string> = [
    'Dog',
    'Cat',
    'Rabbit'
]

console.log('List of animals:\n')
for(let animal of animals){
    console.log(animal);
}

//Step02 >> Modify your program to print a statement about each animal, such as A dog would make a great pet:

console.log('\n\nStatements about each animmal.\n')
for(let animal of animals){
    if(animal.toLowerCase() === 'dog'){
        console.log(`The ${animal} is a great faithful animal.`)
    }
    else if(animal.toLowerCase() === 'cat'){
        console.log(`The ${animal} is a cute animal and would be a best companion at home.`)
    }
    else if(animal.toLowerCase() === 'rabbit'){
        console.log(`The ${animal} is an animal whose meat is used to eat in most foods.`)
    }
}

//Step03 >> Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

console.log("\n\nwhat these animals have in common.")
console.log("\nAny of these animals could be a great pet!\n")