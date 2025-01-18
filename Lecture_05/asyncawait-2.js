const { rejects } = require("assert");
const { resolve } = require("path");

function promiseTimeot(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms);
    });
}

async function longRunningOperation() {
    // logic
    return 42;
}

async function  run() {
    // logic
    console.log("Start!!");
    await promiseTimeot(2000);
    //try to take await out and see
    const response = await longRunningOperation();
    console.log(response);

    console.log("Stop!!");
}
console.log('Before run');
run();
console.log('After run');