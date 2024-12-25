function promiseTimeot (ms) {
    return new Promise((relsolve,reject) => {
        setTimeout(relsolve,ms);
    });
}

promiseTimeot(2000)
    .then(() => {
        console.log("Done!!");
        return promiseTimeot(1000);
    })
    .then(() => {
        console.log("Also done!!");
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error");
    });