// Write your solution in this file!
// Declare a variable in global scope called customerName and assign it the value 'bob'
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function that changes the bestCustomer variable to 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it an initial value
const leastFavoriteCustomer = 'someone';

// Write a function that attempts to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  // Attempt to change the constant
  leastFavoriteCustomer = 'someone else'; // This will result in an error as constants cannot be reassigned
}

// Test the functions
console.log(customerName); // Output: '-bob'
console.log(upperCaseCustomerName()); // Output: '+bob'
console.log(bestCustomer); // Output: undefined (before calling setBestCustomer)
setBestCustomer();
console.log(bestCustomer); // Output;'not bob'
overwriteBestCustomer();
console.log(bestCustomer); // Output: 'maybe bob'
console.log(leastFavoriteCustomer); // Output: 'someone'
changeLeastFavoriteCustomer(); // This will result in an error