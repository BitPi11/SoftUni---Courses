function goldMine(input) {
    index = 0;
    let location = Number(input[index]);
    index++;
    let expectedYield = 0
    let numOfDays = 0
    let yieldForDay = 0;
    let averedYield = 0;
    let currYield = 0;
   
    for (let i = 0; i < location; i++) {
        expectedYield = Number(input[index])
        index++
        numOfDays = Number(input[index]);
        index++
        let days = 0;
        while (days < numOfDays) {
            days += 1
            currYield = Number(input[index]);
            index++
            yieldForDay += currYield
        }
        averedYield = yieldForDay / numOfDays;
        if (averedYield >= expectedYield) {
            console.log(`Good job! Average gold per day: ${averedYield.toFixed(2)}.`)
            yieldForDay = 0;
            
        } else if (averedYield < expectedYield) {
            let needetGold = expectedYield - averedYield;
            console.log(`You need ${needetGold.toFixed(2)} gold.`);
            yieldForDay = 0;
        }
    }
}


goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);


