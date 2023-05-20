function vacantion(input) {
    index = 0
    let needetMoney = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;
    let spendCounter = 0;
    let allDays = 0;
    let canSavedMoney = true;


    while (needetMoney > availableMoney) {
        let action = input[index]
        index++
        let tempMoney = Number(input[index])
        index++
        allDays++

        switch (action) {
            case "spend":
                spendCounter += 1;
                availableMoney -= tempMoney;
                if (availableMoney < 0) {
                    availableMoney = 0
                }
                if (spendCounter === 5) {
                    canSavedMoney = false;
                    break;
                }
                break;
            case "save":
                availableMoney += tempMoney;
                spendCounter = 0;
                break;
        }

        if (!canSavedMoney) {
            break;
        }


    }

    if (!canSavedMoney) {
        console.log(`You can't save the money.`);
        console.log(`${allDays}`);
    }
    else { console.log(`You saved the money for ${allDays} days.`) }
}
vacantion(["250",

    "150",

    "spend",

    "50",

    "spend",

    "50",

    "save",

    "100",

    "save",

    "100"])