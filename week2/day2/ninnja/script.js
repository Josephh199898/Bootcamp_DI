


let firstBirthYear = prompt("add your age");
let secondBirthYear = prompt("add your friend age");
let firstAge = 2020 - firstBirthYear;
let secondAge = 2020 - secondBirthYear;
if (firstAge > secondAge) {
    if (firstAge / 2 == secondAge) {
        alert("your age is twice bigger than your friend")
    }
} else {
    if (secondAge / 2 == firstAge) {
        alert("your friend's age is twice bigger than yours")
    }
}





/* Harder exercise

 */

let zipCode = prompt("please enter your zipcode ");
console.log(zipCode.length);
console.log(typeof(zipCode))
let checktype = isNaN(zipCode);
console.log(checktype)
if (zipCode.length < 5 && zipCode != " " && checktype == false) {
    console.log('succes')
} else {
    console.log("error")
}
