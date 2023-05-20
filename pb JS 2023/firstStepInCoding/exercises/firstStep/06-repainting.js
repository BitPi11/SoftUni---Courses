
function repainting (input) {
let nylonPerQuartermeter = Number (input [0]);
let paintPerLiter = Number (input [1]);
let thinnerPerLiter = Number (input [2]);
let workingHours = Number (input [3]);
let paintReserv = paintPerLiter * (10 /100);
let nylonPrice = (nylonPerQuartermeter + 2) * 1.5;
let paintPrice = (paintPerLiter + paintReserv ) * 14.50;
let tinnerPrice = thinnerPerLiter * 5.00;
let priceForMaterial = nylonPrice + paintPrice + tinnerPrice + 0.40;
let priceForWork = (priceForMaterial * (30/100) ) * workingHours; 
let finalPrice = priceForMaterial + priceForWork;
console.log  (finalPrice);
}

repainting( ["10", "11", "4", "8"]);