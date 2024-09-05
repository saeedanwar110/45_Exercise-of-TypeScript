/*
Working with one of the programs form Exercise 14 throught 18, print a message indicating the number of people you are inviting to dinner.
*/

let myFriends: string[] = ["Kashif", "Qadeer", "Qasir", "Karam", "Raja"];

console.log(`I am inviting ${myFriends.length} number of friends to my dinner which are following \n`);

for(let i = 0; i< myFriends.length; i++){
    console.log(`${i + 1}. ${myFriends[i]}`)
}