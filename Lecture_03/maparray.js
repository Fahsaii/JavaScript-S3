const finalPartipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = finalPartipants.map((member) => {
    return member + " joined the contest.";
});

console.log(announcements);