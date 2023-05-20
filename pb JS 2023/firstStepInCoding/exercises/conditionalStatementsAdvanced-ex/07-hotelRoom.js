function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let priceForApartmant = 0;
    let priceForStudio = 0;

    switch (month) {
        case "May":
            priceForStudio = 50
            priceForApartmant = 65
            break;
        case "June":
            priceForStudio = 75.20;
            priceForApartmant = 68.70;
            break;
        case "July":
            priceForStudio = 76;
            priceForApartmant = 77;
            break;
        case "August":
            priceForStudio = 76;
            priceForApartmant = 77;
            break;
        case "September":
            priceForStudio = 75.20;
            priceForApartmant = 68.70;
            break;
        case "October":
            priceForStudio = 50
            priceForApartmant = 65
            break;
    }
    if (nights > 7 && nights < 14) {
        switch (month) {
            case "May":
            case "October":
                priceForStudio *= 0.95;
                break;
        }
    } else if (nights > 14) {
        priceForApartmant *= 0.90;
        switch (month) {
            case "May":
            case "October":
                priceForStudio *= 0.70;
                break;
            case "June":
            case "September":
                priceForStudio *= 0.80;
                break;

        }
    }
    let allMoneyForApartmant = priceForApartmant * nights;
    let allMoneyForStudio = priceForStudio * nights;

    console.log(`Apartment: ${allMoneyForApartmant.toFixed(2)} lv.`);
    console.log(`Studio: ${allMoneyForStudio.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);

