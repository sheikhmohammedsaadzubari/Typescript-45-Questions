/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

let guestsList: Array<string> = [
     'Umer',
     'Ali',
     'Usman',
     'Abdul Rehman',
     'Saad',
     'Saleem' 
]

//Step 01 : • Add a print statement to the end of your program informing people that you found a bigger dinner table. 

for(let guest of guestsList){
console.log(`Hello ${guest}!  \n  I found a bigger dinner table.\n\n`)
}


//Step 02 : • Add one new guest to the beginning of your array.

let addGuestInBeginning : string = "Ahmad jalalludin";
guestsList.unshift(addGuestInBeginning)

//Step 03 : • Add one new guest to the middle of your array.

let addGuestInMiddle : string = "Ahmed Noori";
let index : number = Math.round(guestsList.length/2);
guestsList.splice(index , 0 , addGuestInMiddle )


//Step 04 : • Use append() to add one new guest to the end of your list.

let addGuestInEnd : string = "Eshraf Eziz";
guestsList.push(addGuestInEnd);


//Final Step: • Print a new set of invitation messages, one for each person in your list.

console.log("New set of Invitation message:")


//for each loop for print each person's invittation:


guestsList.forEach((guest:string) =>
{
console.log(`\n\n Dear ${guest}! \n I wanted that you join us in dinner.`)

}
)

