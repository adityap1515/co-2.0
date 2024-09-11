/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
   
    let time = Date.now();
    let passed = 0
    while(passed < milliseconds){
        let now = Date.now();
        passed = now - time;
    }
    return new Promise((resolve, reject) => {
        resolve();
    })
}



module.exports = sleep;
