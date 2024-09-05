/* Start with your work from Exercise 42. Call the function make_great() with a copy of the array 
of magicians’ names. Because the original array will be unchanged, return the new array and store it 
in a separate array. Call show_magicians() with each array to show that you have one array of the 
original names and one array with the Great added to each magician’s name. */


let megician_Names2 = ["Ali", "Ahmed", "Faraz", "naeem"];
let copyOfMegicianNames = [...megician_Names2];

function make_greet(greet:string){
    let withGreetings = "";

for(let Megicians of copyOfMegicianNames){

    withGreetings += `${greet} ${Megicians}\n`;
}
return withGreetings;
}
let myGreeting = make_greet("Hello");
let makeArray = myGreeting.split("\n");

console.log(makeArray);
// original Array
console.log(megician_Names2);