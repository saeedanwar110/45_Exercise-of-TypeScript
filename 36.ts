/* Write a function called make_shirt() that accepts a size and the text of a message that should 
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the 
message printed on it. Call the function.  */


function make_shirt(size:string, label:String){
    return `I have orderd for shirt of ${size} size, and message '${label}' will be written on it.`;
    }
    let myShirt = make_shirt("Medium", "Large with half arms");
    console.log(myShirt);