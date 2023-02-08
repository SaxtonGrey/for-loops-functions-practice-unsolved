
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r', 'a'], ['f', 'y']]) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

import { flatArraysData } from "../data/data";

export function flatArrays(array) {
  // Your code goes here...
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            let flattened = flatArrays(array[i]);
            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j]);
            }
        } else {
            result.push(array[i]);
            }
    }
    return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
