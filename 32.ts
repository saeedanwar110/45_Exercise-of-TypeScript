/* Do the following to create a program that simulates how websites ensure that everyone has a 
unique username. 
• Make a list of five or more usernames called current_users. 
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list. 
• Loop through the new_users list to see if each new username has already been used. If it has, print 
a message that the person will need to enter a new username. If a username has not been used, print 
a message saying that the username is available. 
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
accepted. */


let current_users = ["Saeed", "Ali", "Hassnain", "Admin", "Raja","Mohsin"];
let new_users = ["Qasir", "Qadeer", "Kashif", "Altaf", "Hafeez", "Naeem"]

// using for each method
new_users.forEach(new_user=>{
   let new_userLower = new_user.toLowerCase();

   //Some() method is used
let userNameTaken = current_users.some(current_user => current_user.toLowerCase()===new_userLower)
if(userNameTaken){
   console.log(`This username ${new_user} is already been used. Please enter new username.`)

}else{
    console.log(`${new_user} is the new member added.`)
current_users.push(new_user)       // new user is added to current users
}                   
});
console.log(`current_users`)