/*
If you could invite anyone, living or deceased, to dinner. who would you invite? Make a list that include at least three people you`d like to invite to dinner. Then use your list to print a message to each person.
inviting them to dinner. 
*/

const myFriends: string[] = ["Karam", "Mohsin", "Ali Ahmed", "Mudsar"];
// 1st methord with loop

for(let i = 0; i < myFriends.length; i ++ ){
    console.log(`Mr. ${myFriends[1]}! you are invite to my dinner on Monday`);
}

//2nd methord 


// myFriends.map((sa)=>{
//     console.log(`Mr. ${sa}! you are invite to my dinner on Moday`);
// })