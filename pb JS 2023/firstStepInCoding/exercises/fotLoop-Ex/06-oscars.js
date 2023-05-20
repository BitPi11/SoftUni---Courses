function oscars(input) {
    let Actor = input[0];
    let firstScore = Number(input[1]);
    let judgesCount = Number(input[2]);
    for (let i = 3; i < input.length; i += 2) {
        let judgesName = input[i];
        let judgesScore = Number(input[i + 1]);
        let pointsWon = judgesName.length * judgesScore / 2;
        firstScore += pointsWon;

    if (firstScore > 1250.5) {
        console.log(`Congratulations, ${Actor} got a nominee for leading role with ${firstScore.toFixed(1)}!`);
     break;   
    }
    
}
if (firstScore <= 1250.50){
    let needetScore = 1250.5 - firstScore;
    console.log(`Sorry, ${Actor} you need ${needetScore.toFixed(1)} more!`);
}
}

oscars ([
    "Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);