// const { rejects } = require("assert");
// const { resolve } = require("path");

function promiseTimeot(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms);
    });
}

async function run () {
    //logic
    console.log("Start!!");
    // try take of await and compare
    await promiseTimeot(2000);
    console.log("Stop!!");
}

run();