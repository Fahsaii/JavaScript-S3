const { rejects } = require("assert");
const { resolve } = require("path");

function yay0rNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1);
        // 0 or 1, at random
        val ? resolve("Lucky!!") : reject("Nope 😠")
    });
}

async function msg() {
    try {
        const msg = await yay0rNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

msg(); //Lucky!!
msg(); //Lucky!!
msg(); //Lucky!!
msg(); //Nope 😠
msg(); //Lucky!!
msg(); //Nope 😠
msg(); //Nope 😠
