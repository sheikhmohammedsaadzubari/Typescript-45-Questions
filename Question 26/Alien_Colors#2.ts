// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.


//Step 01 • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien:


let alien_color : string = 'green';

console.log(`Version of code when the color of alien is ${alien_color}`)

if (alien_color === 'green'){
    console.log('Congratulations! you just earned 5 points for shooting the alien.\n')
}else{
    console.log('Congratulations! you have just earned 10 points.\n')
}


//Step 02 • If the alien’s color isn’t green, print a statement that the player just earned 10 points:


alien_color = 'red';

console.log(`Version of code when the color of alien is ${alien_color}`)

if (alien_color === 'green'){
    console.log('Congratulations! you just earned 5 points for shooting the alien.\n')
}else{
    console.log('Congratulations! you have just earned 10 points.\n')
}