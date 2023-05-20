
function shopping (input) {
let budget = Number (input [0]);
let graphicCardsCount = Number (input [1]);
let gpuCount = Number (input [2]); 
let ramCount = Number (input [3]);  
let graphicCardsPrice =graphicCardsCount * 250;
let gpuPrice = gpuCount * (graphicCardsPrice * 0.35);
let ramPrice = ramCount * (graphicCardsPrice * 0.1);
let priceForAll = graphicCardsPrice + gpuPrice + ramPrice;

if (graphicCardsCount > gpuCount) {
    priceForAll = priceForAll - (priceForAll * 0.15);
};

if (budget >= priceForAll) {
    let freeMoney = budget - priceForAll;
    console.log (`You have ${freeMoney.toFixed(2)} leva left!`);
} else {
    let neededMoney = priceForAll - budget;
    console.log (`Not enough money! You need ${neededMoney.toFixed (2)} leva more!`);
}
}
 
shopping (["900","2","1","3"]);
