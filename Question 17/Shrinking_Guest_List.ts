// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestsList: Array<string> = [
          'Ahmad jalalludin',
          'Umer',
          'Ali',
          'Usman',
          'Ahmed Noori',
          'Abdul Rehman',
          'Saad',
          'Saleem',
          'Eshraf Eziz',
]

//Step 01 • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log(`I can invite only two people.`)

//Step 02 • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guestsList.length > 2) {
     let removeGuests = guestsList.pop()
     console.log(`\n\n I'm sorry for ${removeGuests}, I can't invite you at dinner.`)
}

//Step 03 • Print a message to each of the two people still on your list, letting them know they’re still invited.

for(let guest of guestsList) {

     console.log(`\n\n Asslam Alaikum ${guest} \n you are still invited. `)
}

//Step 04 • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

while(guestsList.length > 0) {
     guestsList.pop()
}
console.log('\n\n Guests List after dinner:' , guestsList)


export{guestsList}