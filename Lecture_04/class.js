class Song {
    constructor(){
        this.title;
        this.author;
    }

    pay(){
        console.log("Song playing!");
    }
}

const mySong = new Song();
mySong.pay();