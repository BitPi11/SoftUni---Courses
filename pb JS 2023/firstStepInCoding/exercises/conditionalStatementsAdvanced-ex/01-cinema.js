function cinema (input) {
    let movieType= input [0];
    let lines= Number (input [1]);
    let colons = Number (input[2]);
    let allSeats = lines * colons;
    let priceForAll = 0;

switch (movieType) {
    case `Premiere`:
        priceForAll = allSeats * 12
        console.log (priceForAll.toFixed (2));
        break;
        case `Normal`: 
        priceForAll = allSeats * 7.50;
        console.log (priceForAll.toFixed (2));
        break;
        case `Discount`:
            priceForAll = allSeats * 5.00
            console.log (priceForAll.toFixed (2));
            break;
}
}

cinema (["Normal", "21", "13"]);

