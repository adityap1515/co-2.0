/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("recieved"); // Call resolve when time is up
        }, n * 1100);
    });
}

module.exports = wait;

