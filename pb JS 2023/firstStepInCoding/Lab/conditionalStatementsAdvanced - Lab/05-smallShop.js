function smallShop(input) {
    let drink = input[0];
    let town = input[1];
    let quantity = Number (input [2]);
    let price = 0;

    if (town === "Sofia") {
        switch (drink) {
            case "coffee": console.log(price = quantity * 0.50 ); break;
            case "water": console.log(price = quantity * 0.80); break;
            case "beer": console.log(price = quantity * 1.20); break;
            case "sweets": console.log(price = quantity * 1.45); break;
            case "peanuts": console.log(price = quantity * 1.60); break;
            default: ; break;
        }
     } else if (town === "Plovdiv") {
            switch (drink) {
                case "coffee": console.log(price = quantity * 0.40); break;
                case "water": console.log(price = quantity * 0.70); break;
                case "beer": console.log(price = quantity * 1.15); break;
                case "sweets": console.log(price = quantity * 1.30); break;
                case "peanuts": console.log(price = quantity * 1.50); break;
                default: ; break;
            } 
        } else {
                switch (drink) {
                    case "coffee": console.log(price = quantity * 0.45); break;
                    case "water": console.log(price = quantity * 0.70); break;
                    case "beer": console.log(price = quantity * 1.10); break;
                    case "sweets": console.log(price = quantity * 1.35); break;
                    case "peanuts": console.log(price = quantity * 1.55); break;
                    default: ; break;
                }
            }
        }
    


    smallShop(["coffee", "Sofia", "2"])