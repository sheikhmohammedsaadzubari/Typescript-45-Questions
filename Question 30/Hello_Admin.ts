// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.



//Step 01 >> Make an array of five or more usernames,including 'admin':

let userNames : Array<string>  = [
    'Admin',
    'Alexander',
    'Adil',
    'Altaf',
    'Ali',
    'Amir',
    'Abdul Hadi',
    'Akram'
] 

//Step 02 >> Applying conditions to give special message to admin and otherwise generic message:

function greetingMessage(): void
{
for(let i in userNames){
    if(userNames[i].toLowerCase() === 'admin'){
        console.log(`Hello ${userNames[i]}, would you like to see a status report?\n`)
    }
    else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.\n`)  
        }
}
}

greetingMessage();


