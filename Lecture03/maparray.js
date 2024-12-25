const finalPartipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

                                    //ถ้าใช้mapสามารถเเก้ได้เลย
const announcements = finalPartipants.map((member) => {
    return member + " joined the contest.";
});

console.log(announcements);