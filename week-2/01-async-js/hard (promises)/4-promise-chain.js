/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },t1*1000);
    })
}

function wait2(t2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },t2*1000);
    })
}

function wait3(t3) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },t3*1000);
    })
}

function calculateTime(t1, t2, t3) {
    let start = Date.now();
   
       call();
  
    let end = Date.now();
    let time = end - start;
    return time;
}
function call(){
    wait1(t1);
    wait2(t2);
    wait3(t3);
}
module.exports = calculateTime;
