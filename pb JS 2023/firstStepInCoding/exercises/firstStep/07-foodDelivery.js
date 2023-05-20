
function foodDelivery (input) {
let chickenMenuesCount = Number (input [0]);
let fishMenuesCount = Number (input [1]);
let veganMenuesCount = Number (input [2]);
let chickenMenuesPrice = chickenMenuesCount * 10.35;
let fishMenuesPrice = fishMenuesCount * 12.40;
let veganMenuesPrice = veganMenuesCount * 8.15;
let PricewithoutDesert = chickenMenuesPrice + fishMenuesPrice + veganMenuesPrice;
let desertPrice = PricewithoutDesert * (20 / 100);
let priceForEverything = PricewithoutDesert + desertPrice + 2.5;
console.log(priceForEverything);
}

foodDelivery (["2", "4", "3"]);