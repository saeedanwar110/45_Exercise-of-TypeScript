/* 
store a person`s name in a variable, and then that persons name in LowerCase, UpperCase, and titleCase.
*/

const PersonName: string = "Saeed";


// UpperCase
console.log(PersonName.toUpperCase());

// LowerCase
console.log(PersonName.toLowerCase());


// titleCase
let firstletter: string = PersonName.charAt(0).toUpperCase();
let restletters: string = PersonName .slice(1).toLowerCase();
let titleCase = firstletter + restletters;
console.log(titleCase);


