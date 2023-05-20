function christmasGift(input) {
    index = 0
    let command = input[index];
    index++
    let childCounter = 0;
    let aduldCounter = 0;
    let presentForKids = 0;
    let presentForAdulds = 0;
    while (command !== "Christmas") {
        let famYears = Number(command);
        if (famYears <= 16) {
            childCounter++;
            presentForKids++;
        } else {
            aduldCounter++;
            presentForAdulds++;
        }
        command = input[index];
        index++
        // if (command === "Christmas") {
        //     break;
        // }
    }
    let priceForToys = presentForKids * 5;
    let priceForWear = presentForAdulds * 15;
    console.log(`Number of adults: ${aduldCounter}`);
    console.log(`Number of kids: ${childCounter}`);
    console.log(`Money for toys: ${priceForToys}`);
    console.log(`Money for sweaters: ${priceForWear}`);
}
christmasGift([
    "16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"
])

