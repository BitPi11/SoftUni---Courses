function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++
    let sumPrime = 0;
    let sumNonPrime = 0;
    while (command !== "stop") {
        let currNum = Number(command);
        if (currNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for (let divasor = 2; divasor < currNum; divasor++) {
            if (currNum % divasor === 0) {
                isPrime = false;
            }
        }
        if (isPrime === true) {
            sumPrime += currNum;
        } else {
            sumNonPrime += currNum;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime(["30",

    "83",

    "33",

    "-1",

    "20",

    "stop"])