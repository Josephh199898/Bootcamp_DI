let numbers = [123, 8409, 100053, 333333333, 7]
/* Loop through the array above and determine whether or not each number is divisible by three.
Each time you loop console.log true or false. */
/* for (number of numbers) {
if (number % 3) {
//     console.log(`${number} - this number not divide by 3`)
} else {
//       console.log(`${number} - this number is divided by 3`)
}
}
*/

//



let guestList = {
randy: "Germany",
karla: "France",
wendy: "Japan",
norman: "England",
sam: "Argentina"
}


let age = [20, 5, 12, 43, 98, 55, 155];
        /* . Console.log the sum of all the numbers in the age array.
        2. Console.log the highest age in the array */
        /*         let sum = 0;
                for (items of age) {
                    sum += items;

                }

                console.log(sum)
         */
        let beginnig = age[0]
        for (let i = 0; i < age.length; i++) {
            if (beginnig < age[i]) {
                beginnig = age[i]
            }
        }

        console.log(beginnig)