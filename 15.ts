/*
You just heard that one of your guests can`t make the dinner, so you need to send out a new set invitations. You`ll have to think of someone else to invite.

.Start your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can not make it.

.Modify your list. replacing the name of thr guest who can`y make it with the name of the new person you are inviting.

.Print a second set of invitation message. one of each person who id still in your list.

*/  

const myFriend: string[] = ["Karam", "Mohsin", "Ali Ahmed", "Mudsar"];

console.log(`Due to some personal issue Mr.${myFriend[1]} will not come on my dinner`);
myFriend[1] = "Qasir";

console.log(`New list of my friends who are comming to my dinner\n`)
for(let i = 0; i < myFriend.length; i++){
    console.log(`${i + 1}.${myFriend[i]}`)
}