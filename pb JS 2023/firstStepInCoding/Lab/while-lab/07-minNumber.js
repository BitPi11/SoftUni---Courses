function minNumber(input) {
    let i = 0;
    let command = input[i];
    i++
    let minNum = Number(input[0]);
    while (command !== "Stop") {
        let curNumber = Number(command);
        if (curNumber < minNum) {
            minNum = curNumber;
        }
        command = input[i];
        i++
    }
    console.log(minNum)
}
minNumber(["100",

    "99",

    "80",

    "70",

    "Stop"])