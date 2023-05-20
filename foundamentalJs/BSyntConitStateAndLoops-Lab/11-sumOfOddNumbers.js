function sumOfOddNumbers(input) {
    let n = input;
    let sum = 0;
    let currNum = 1;
    let i = 1;

    while (i <= n) {
        if (currNum % 2 !== 0) {
            console.log(currNum)
            sum += currNum
            i++
        }
        currNum++
    }
    console.log(`Sum: ${sum}`)
}

sumOfOddNumbers(5)