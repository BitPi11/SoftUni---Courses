function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let nights = days - 1;
    let priceForNight = 0;

    switch (roomType) {
        case "room for one person":
            priceForNight = 18;
            break;
        case "apartment":
            priceForNight = 25;
            break;
        case "president apartment":
            priceForNight = 35;
            break;
    }
    let priceForAll = priceForNight * nights;
    if (days < 10) {
        switch (roomType) {
            case "apartment":
                priceForAll *= 0.70;
                break;
            case "president apartment":
                priceForAll *= 0.90;
                break;
        }
    } else if (days <= 15) {
        switch (roomType) {
            case "apartment":
                priceForAll *= 0.65;
                break;
            case "president apartment":
                priceForAll *= 0.85;
                break;
        }
    } else {

        switch (roomType) {
            case "apartment":
                priceForAll *= 0.50;
                break;
            case "president apartment":
                priceForAll *= 0.80;
                break;
        }
    }
    switch (rating) {
        case "positive":
            priceForAll *= 1.25;
            break;
        case "negative":
            priceForAll *= 0.90;
            break;
    }
    console.log(priceForAll.toFixed(2));
}
skiTrip(["30", "president apartment","negative"]);

