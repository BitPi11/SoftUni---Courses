

function bonusScore(input) {
    let startPoints = Number(input[0]);
    let bonusPoints = 0;

    if (startPoints <= 100) {
        bonusPoints = 5;
    } else if (startPoints <= 1000) {
        bonusPoints = 0.2 * startPoints;
    } else {
        bonusPoints = 0.1 * startPoints;
    }

    if (startPoints % 2 === 0) {
        bonusPoints = bonusPoints + 1;
    } else if (startPoints % 10 === 5) {
        bonusPoints = bonusPoints + 2
    }
    let allPoints = startPoints + bonusPoints;
    console.log(bonusPoints);
    console.log(allPoints);

}

bonusScore (["2703"]);