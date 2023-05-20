function cleverLily(input) {
    let Bdays = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let moneyForBd = 0;
    let moneyGift = 10;

    for (i = 1; i <= Bdays; i++) {
        if (i % 2 === 0) {
            moneyForBd = moneyForBd + (moneyGift - 1);
            moneyGift += 10
        } else {
            moneyForBd = moneyForBd + pricePerToy;
        }
    }

    if (washerPrice <= moneyForBd) {
        let freeMoney = moneyForBd - washerPrice;
        console.log(`Yes! ${freeMoney.toFixed(2)}`)
    } else {
        let needetMoney = washerPrice - moneyForBd;
        console.log(`No! ${needetMoney.toFixed(2)}`);
    }
}
cleverLily([
    "21",
    "1570.98",
    "3"]);