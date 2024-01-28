
// // Function to print a right-angled triangle
// function printRightAngleTriangle(height) {
//     for (let i = 1; i <= height; i++) {
//         let row = '';

//         // Add spaces before the asterisks
//         for (let j = 1; j <= height - i; j++) {
//             row += ' ';
//         }

//         // Add asterisks for each row
//         for (let k = 1; k <= i; k++) {
//             row += '*';
//         }

//         // Print the row
//         console.log(row);
//     }
// }

// Example: Print a right-angled triangle with height 5

function printLeftAngleTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';

        // Add asterisks for each row
        for (let k = 1; k <= i; k++) {
            row += '*';
        }

        // Print the row
        console.log(row);
    }
}
printLeftAngleTriangle(5)