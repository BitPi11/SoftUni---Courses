function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let flowersPrice = 0;

    switch (flowersType) {
        case "Roses":
            flowersPrice = flowersCount * 5;
            break;
        case "Dahlias":
            flowersPrice = flowersCount * 3.80;
            break;
        case "Tulips":
            flowersPrice = flowersCount * 2.80;
            break;
        case "Narcissus":
            flowersPrice = flowersCount * 3;
            break;
        case "Gladiolus":
            flowersPrice = flowersCount * 2.5;
            break;
    }
    if (flowersType === "Roses" && flowersCount > 80) {
        flowersPrice *= 0.90;
    } else if (flowersType === "Dahlias" && flowersCount > 90) {
        flowersPrice *= 0.85;
    } else if (flowersType === "Tulips" && flowersCount > 80) {
        flowersPrice *= 0.85;
    } else if (flowersType === "Narcissus" && flowersCount < 120) {
        flowersPrice *= 1.15;
    } else if (flowersType === "Gladiolus" && flowersCount < 80) {
        flowersPrice *= 1.20;
    }
    if (flowersPrice <= budget) {
        let finalPrice = budget - flowersPrice;
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${finalPrice.toFixed(2)} leva left.`)
    } else {
        let NeedetMoney = flowersPrice - budget;
        console.log(`Not enough money, you need ${NeedetMoney.toFixed(2)} leva more.`)
    }

}

newHouse(["Roses", "55", "250"]);

