function fishingBoat (input) {
    let budget = Number (input [0]);
    let season = input [1];
    let fisherCount = Number (input [2]);
    let priceForBoat = 0;
    switch (season) {
        case "Spring": priceForBoat = 3000;break; 
        case "Summer":
        case "Autumn": priceForBoat = 4200; break;
        case "Winter": priceForBoat = 2600; break;
    }
if (fisherCount <= 6) {
    priceForBoat *= 0.9;
} else if (fisherCount <=11) {
    priceForBoat *= 0.85;
} else if (fisherCount > 12 ){
    priceForBoat *= 0.75
}
if (fisherCount %2 ===0 && season != "Autumn") {
    priceForBoat *=0.95;
}
if (budget >= priceForBoat) {
    let finallPrice = budget - priceForBoat
    console.log (`Yes! You have ${finallPrice.toFixed(2)} leva left.`)
} else {
    let needetMoney = priceForBoat - budget
    console.log (`Not enough money! You need ${needetMoney.toFixed(2)} leva.`)
}
}
fishingBoat (["2000", "Winter", "13"])

