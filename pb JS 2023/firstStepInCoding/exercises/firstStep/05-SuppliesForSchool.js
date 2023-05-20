function suppliesForSchool (input) {
let pensPacksCount = Number (input [0]);
let markerPacksCount = Number (input [1]);
let detergentPerLitter = Number (input [2]);
let discount = Number (input [3]) / 100;
let pensPrice = pensPacksCount * 5.80;
let markerPrice = markerPacksCount * 7.20;
let detergentPrice = detergentPerLitter * 1.2;
let totalPrice = pensPrice + markerPrice + detergentPrice;
let totalPriceWithDiscount = totalPrice - (totalPrice * discount);
console.log (totalPriceWithDiscount);
}

suppliesForSchool (["2","3","4", "25"]);

