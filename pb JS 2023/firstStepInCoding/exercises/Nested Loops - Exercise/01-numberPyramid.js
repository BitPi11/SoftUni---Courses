function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentNum = " ";

    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentNum += current + ` `;
            current++

        }
        console.log(printCurrentNum)
        printCurrentNum = " ";
        if (isBigger) {
            break;
        }

    }

}

numberPyramid([15])