/*
Think of your favorite mode of transportation. such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items.such as "I would like to own a Honda motercycle."
*/

const myTrans: string[] = ["Car", "Bike", "Bus", "Train"];
// 1st methord (loop)
for(let i = 0; i <= 3; i++){
    console.log(`I would like to own a ${myTrans[i]}`);
}

// const myTrans: string[] = ["Car", "Bike", "Bus", "Train", "Aeroplane"];
// // 1st methord (loop)
// for(let i = 0; i < myTrans.length; i++){
//     console.log(`I would like to own a ${myTrans[i]}`);
// }


// const myTrans: string[] = ["Car", "Bike"];
// // 1st methord (loop)
// for(let i = 0; i < myTrans.length; i++){
//     console.log(`I would like to own a ${myTrans[i]}`);
// }


// 2nd methord 
// myTrans.map((sa)=>{
//     console.log(`I would like to own a ${sa}`)
// })