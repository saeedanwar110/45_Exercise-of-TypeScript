/* Think of at least three different animals that have a common characteristic. Store the names 
of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print 
a sentence such as Any of these animals would make a great pet! */

let animals = ["Cow", "sheep", "Goat", "Camel"]

//Printing first names only 

for(let i of animals){
    console.log(i)
}
// Printing statement also
for(let j of animals){
    console.log(`A ${j} is a Domestic animal.`)
}
console.log(`All these animal' ${animals[0]}, ${animals[1]}, ${animals[2]} and ${animals[3]}
meat is Halal in Islam.`)