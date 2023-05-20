

function basketballEquipment(input) {
    let taxPerYear = Number(input[0]);
    let shoesPrice = taxPerYear - (taxPerYear * (40 / 100));
    let outfitPrice = shoesPrice - (shoesPrice * (20 / 100));
    let basketballPrice = outfitPrice * (25 / 100);
    let accessoriesPrice = basketballPrice * (20 / 100);
    let finalPrice = shoesPrice + outfitPrice + basketballPrice + accessoriesPrice + taxPerYear;
    console.log(finalPrice);
}

basketballEquipment([365]);