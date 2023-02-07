
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
    var wrongBalance = [];

    for (var obj of array) {
        var depo = 0;
        var withDraw = 0;

        if (obj['deposits'] && obj['withdrawals']) {
            for (var num of obj['deposits']) {
            depo += Number(num);
            }
            for (var trans of obj['withdrawals']) {
            withDraw += Number(trans);
            } 
            if (depo - withDraw != obj['balance']) {
            wrongBalance.push(obj);
            } 
        }
    } return wrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
