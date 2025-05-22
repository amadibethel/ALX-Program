// alx_prompt_practice.js using Node.js

const readline = require('readline-sync');

const userName = readline.question("What is your name? ");
const userAge = readline.question("How old are you? ");
const currentYear = new Date().getFullYear();
const yearOfBirth = currentYear - parseInt(userAge);

console.log(`Hello, ${userName}! You were born in ${yearOfBirth}.`);
