ls// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// We store guests name in the array:
let guestsList: Array<string> = [
    'Umer',
    'Ali',
    'Usman',
    'Abdul Rehman',
    'Saad',
    'Haris'
]


// Loop for each to print invitation:

guestsList.forEach((guestName:string) =>
{
console.log(`Dear ${guestName}! \n I wanted that you join us in dinner. \n \n `)

}
)


export{guestsList}