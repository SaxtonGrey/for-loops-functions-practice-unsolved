// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(array) {
  // Your code goes here...
    var sums = [];

    for (var obj of array) {
        if (obj['withdrawals']) {
            var sum = 0;
            for (var num of obj['withdrawals']) {
                sum += Number(num);
            } 
            sums.push(sum);
        } else { sums.push(0); }
    } 
    return sums;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
