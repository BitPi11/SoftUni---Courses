function catLife(input) {
    let breed = input[0];
    let gender = input[1];
    let humanYears = 0;
    let isValid = true;

    if (gender === "m") {

        switch (breed) {
            case "British Shorthair":
                humanYears = 13;
                break;
            case "Siamese":
                humanYears = 15;
                break;
            case "Persian":
                humanYears = 14;
                break;
            case "Ragdoll":
                humanYears = 16;
                break;
            case "American Shorthair":
                humanYears = 12;
                break;
            case "Siberian":
                humanYears = 11;
                break;
            default:
                console.log(`${breed} is invalid cat!`);
                isValid = false;
                break;
        }
    } else {
        switch (breed) {
            case "British Shorthair":
                humanYears = 14;
                break;
            case "Siamese":
                humanYears = 16;
                break;
            case "Persian":
                humanYears = 15;
                break;
            case "Ragdoll":
                humanYears = 17;
                break;
            case "American Shorthair":
                humanYears = 13;
                break;
            case "Siberian":
                humanYears = 12;
                break;
            default:
                console.log(`${breed} is invalid cat!`);
                isValid = false;
                break;
        }
    }
    let humanMonths = humanYears * 12
    let catMonths = humanMonths / 6;

   if (isValid) { console.log(`${catMonths} cat months`);}
}
catLife(["tom",
    "m"])

