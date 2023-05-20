function printAndSum(startNum, endNum) {
    let printNum = "";
    let sum = 0
    for (i = startNum; i <= endNum; i++) {
        printNum += " " + i;
        sum += i
    }
    console.log(printNum)
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10);