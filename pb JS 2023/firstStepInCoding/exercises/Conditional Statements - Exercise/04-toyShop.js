

function toyShop (input) {
let tripPrice = Number(input [0]);
let puzzleslCount = Number (input[1]);
let dollsCount = Number (input [2]);
let bearsCount = Number (input[3]);
let minionsCount = Number (input [4]);
let trucksCount = Number (input[5]);
let toysPrice = puzzleslCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
let toysCount = puzzleslCount + dollsCount + bearsCount+ minionsCount+ trucksCount; 
if (toysCount >= 50) {
    toysPrice = toysPrice - (0.25 * toysPrice);
}
let RentPrice = 0.10 * toysPrice;
let profit = toysPrice - RentPrice;

if (profit >= tripPrice) {
    let remainingAmount = profit - tripPrice
    console.log ( `Yes! ${remainingAmount.toFixed(2)} lv left.`);
} else {
    let needetMoney = tripPrice - profit
    console.log (`Not enough money! ${needetMoney.toFixed(2)} lv needed.`)
}

}

toyShop (["320", "8", "2", "5", "5", "1"]);