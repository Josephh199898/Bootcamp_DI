//Create 2 variables, x and y. Each of them should have a different numeric value.
//Write an if/else statement that checks which number is bigger.
let x = 65;
let y = 15;
if (x > y) {
    //console.log(x + " " + y + "den boyukdur")
} else {
    // console.log(y + " " + x + "den boyukdur")
}

/* Create a variable called newDog where it’s value is “Chihuahua”.
 */
let newDog = "Chihuahua";
// console.log(newDog.length);
// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());

if (newDog == "Chihuahua") {
    //    console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
    // console.log("I dont care, I prefer cats")
}

/* Prompt the user for a number and save it to a variable.
*/

let number = prompt("Please type a number");

if (number % 2 === 0 && number > 0) {
    console.log(number + " is an even number")
} else if (number % 2 === 1) {
    console.log(number + " is an odd number")
} else if (number == 0) {
    console.log("0 is neither odd or even")
} else {
    console.log("I said you enter a number!!!!")
    alert("You don't know what is number?")
}

/* Using the array above, console.log the number of users that are connected to the group chat based on the following rules:

 */
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users.length);
if (users.length == 0) {
    alert("no one is online")
} else if (users.length == 1) {
    alert(users[users.length - 1] + " is online")
} else if (users.length == 2) {
    alert(users[0] + " and " + users[1] + " are online")
} else {
    alert(users[0] + " , " + users[1] + ` and there are ${users.length - 2} more people`)
}
