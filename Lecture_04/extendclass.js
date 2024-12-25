// Parent class
class Media {
    constructor(info) {
        this.publisDate = info.publisDate;
        this.name = info.name;
    }
}

// Child class
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song ({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publisDate: 1975,
});

console.log(mySong);