// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


//Step01 • If the alien is green, print a message that the player earned 5 points.

let alien_color : string = 'green';

console.log(`First version where alien color is ${alien_color}:`)

if (alien_color === 'green')
{
    console.log('Congratulations! you just earned 5 points for shooting the alien.\n')
}
else if (alien_color === 'yellow')
{
    console.log('Congratulations! you just earned 10 points for shooting the alien.\n')
}
else if (alien_color === 'red')
{
        console.log('Congratulations! you just earned 15 points for shooting the alien.\n')
    }
    

//Step02 • If the alien is yellow, print a message that the player earned 10 points.

alien_color = 'yellow';

console.log(`Second version where alien color is ${alien_color}:`)

if (alien_color === 'green')
{
    console.log('Congratulations! you just earned 5 points for shooting the alien.\n')
}
else if (alien_color === 'yellow')
{
    console.log('Congratulations! you just earned 10 points for shooting the alien.\n')
}
else if (alien_color === 'red')
{
        console.log('Congratulations! you just earned 15 points for shooting the alien.\n')
    }
    
// • If the alien is red, print a message that the player earned 15 points.

alien_color = 'red';

console.log(`Third version where alien color is ${alien_color}:`)

if (alien_color === 'green')
{
    console.log('Congratulations! you just earned 5 points for shooting the alien.\n')
}
else if (alien_color === 'yellow')
{
    console.log('Congratulations! you just earned 10 points for shooting the alien.\n')
}
else if (alien_color === 'red')
{
        console.log('Congratulations! you just earned 15 points for shooting the alien.\n')
    }
    
