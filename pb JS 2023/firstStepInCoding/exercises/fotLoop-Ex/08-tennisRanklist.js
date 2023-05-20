function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let wonPoints = 0;
    let wons = 0;
    for (let i = 2; i < input.length; i++) {
        let results = input[i];
        if (results === "W") {
            wonPoints += 2000;
            wons += 1
        } else if (results === "F") {
            wonPoints += 1200;
        } else {
            wonPoints += 720;
        }
    }

    console.log(`Final points: ${wonPoints + startingPoints} `)

    let avgPoints = Math.floor(wonPoints / tournamentsCount);

    console.log(`Average points: ${avgPoints}`);
    let wonsPercent = (wons / tournamentsCount) * 100
    console.log(`${wonsPercent.toFixed(2)}%`);

}

tennisRanklist([
    "5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);