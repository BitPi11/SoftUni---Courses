function accauntBallance(input) {
    let i = 0;
    let totalBalance = 0;
    let command = input[i];
    i++

    while (command !== "NoMoreMoney") {
        let money = Number(command);
        if (money < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalBalance += money;
        console.log(`Increase: ${money.toFixed(2)}`)
        command = input[i];
        i++
    }
    console.log(`Total: ${totalBalance.toFixed(2)}`);
}
accauntBallance([
    "5.51",

    "69.42",

    "-100",

    "NoMoreMoney"
]);