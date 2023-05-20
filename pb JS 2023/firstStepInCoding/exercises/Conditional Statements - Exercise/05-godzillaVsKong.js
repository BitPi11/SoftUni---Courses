

function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clotesPriceForOneActor = Number(input [2]);
    let decorPrice = 0.10 * budget;
    let AllClotesPrice = actorsCount * clotesPriceForOneActor

    if (actorsCount > 150) {
        AllClotesPrice = AllClotesPrice - (0.10 * AllClotesPrice)
    }
    let moviePrice = decorPrice + AllClotesPrice;
    if (moviePrice <= budget) {
        let needetMoney =  budget - moviePrice
        console.log("Action!");
        console.log(`Wingard starts filming with ${needetMoney.toFixed (2)} leva left.`);
    } else {
        let moneyLeft = moviePrice - budget;
        console.log("Not enough money!");
        console.log(` Wingard needs ${moneyLeft.toFixed(2)} leva more.`);
    }

}

godzillaVsKong (["9587.88","222","55.68"]);