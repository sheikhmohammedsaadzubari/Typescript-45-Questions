// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


//A array was declared in which two types of item will be stored:

let favoriteTransportation : Array<[transport: string , brand: string]> = [] 


//To push items in array:

favoriteTransportation.push(["motorcycle" , "Honda"])
favoriteTransportation.push(["car" , "Suzuki"])
favoriteTransportation.push(["bicycle" , "Sohrab"])
favoriteTransportation.push(["scooter" , "Kawasaki"])

/* Using for each loop to print a message like this to print a series of statements:   “I would like to own a Honda motorcycle.”
*/


favoriteTransportation.forEach(([transport , brand]) =>
{
 console.log(`I would like to own a ${brand} ${transport}.`)
})