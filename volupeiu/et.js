function applyNumberRule(numbers) {
    // Define the rule: Check if a number is a multiple of 3
    numbers.forEach(number => {
        if (number % 3 === 0) {
            console.log(`${number} is a multiple of 3.`);
        } else {
            console.log(`${number} is not a multiple of 3.`);
        }
    });
}

// Example usage:
const numbersArray = [1, 3, 4, 6, 7, 9];
applyNumberRule(numbersArray);
// Output:
// 1 is not a multiple of 3.
// 3 is a multiple of 3.
// 4 is not a multiple of 3.
// 6 is a multiple of 3.
// 7 is not a multiple of 3.
// 9 is a multiple of 3.
